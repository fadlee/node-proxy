# Node Proxy Docker Image

This repository contains a Dockerized Node.js proxy server using the `http-proxy` library. The proxy server forwards HTTP requests to a specified target URL.

## Features

- Simple HTTP proxy server
- Configurable target URL and port using environment variables
- Ready to deploy with Docker

## Docker Image

The Docker image for this project is available on Docker Hub: [`fadlee/node-proxy`](https://hub.docker.com/r/fadlee/node-proxy)

## Usage

### Running the Docker Container

To run the Docker container with the proxy server, use the following command:

```bash
docker run -d -p 8000:8000 -e TARGET_URL=https://your-target-url.com -e PORT=8000 fadlee/node-proxy
```

### Environment Variables

- `TARGET_URL`: The URL of the target server to which the requests will be proxied. Default is `https://default-target-url.com`.
- `PORT`: The port on which the proxy server will listen. Default is `8000`.

### Example

```bash
docker run -d -p 8000:8000 -e TARGET_URL=https://example.com -e PORT=8000 fadlee/node-proxy
```

This command runs the proxy server in a Docker container, forwarding requests from `http://localhost:8000` to `https://example.com`.


