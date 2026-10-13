ARG WORKDIR_PATH="/app"
# ===============================
#  STAGE: base
# ===============================
FROM node:22-alpine AS base

ARG WORKDIR_PATH

WORKDIR ${WORKDIR_PATH}

# ===============================
#  STAGE: devtools
# ===============================
FROM base AS devtools

RUN apk update && \
  apk add --no-cache \
  git \
  curl \
  bash \
  openssh-client \
  ripgrep

# ===============================
#  STAGE: builder
# ===============================
FROM base AS builder

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# ===============================
#  STAGE: final (Nginx)
# ===============================
FROM nginx:1.27-alpine AS final

ARG WORKDIR_PATH

ENV NGINX_DIR=/usr/share/nginx/html

RUN apk update && apk upgrade --no-cache

RUN rm -rf ${NGINX_DIR}/* && \
    mkdir -p /tmp/client_temp && \
    chown -R nginx:nginx ${NGINX_DIR} /tmp


COPY --from=builder ${WORKDIR_PATH}/dist ${NGINX_DIR}

COPY --from=builder ${WORKDIR_PATH}/nginx.conf /etc/nginx/nginx.conf

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]


# ===============================
#  STAGE: default
# ===============================
FROM final AS default