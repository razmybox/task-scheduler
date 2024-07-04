This document provide a guide on **Direct installaion on the system** and **Docker**

## Direct Installation on the system

1. Clone the repo and  run :

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
2. Start the dev server by running :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

################################################################################################
################################################################################################


## Instructions to Run the Solution Using Docker

**Prerequisites**
  1. Docker: Ensure Docker is installed on your system. You can download it from here.
  2. Docker Compose: Ensure Docker Compose is installed. It usually comes bundled with Docker Desktop, but you can install it separately if needed. Follow the installation guide here.

## Steps
1. After cloaning thee repo, navigate to the directory containing the Dockerfile and docker-compose.yaml using 
   ```bash
   cd /path/to/your/project
   ```
2. Run the docker composer:
   ```bash
   docker compose up --build
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
      
## View on Vercel
You can check out the app on   [Vercel](https://task-scheduler-seven.vercel.app/)
