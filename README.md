# Running in containers

## docker-compose

```bash
# build image
docker compose build
```

```bash
# Install dependencies
docker compose run --rm app npm install
```

```bash
# Run UI
docker compose run --rm -p app npm start
```

## devcontainer

```bash
# Install dependencies
npm install
```

```bash
# Run Ui
npm start
```
