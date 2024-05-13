# nowtv_tr-m3u8-worker
This is a Cloudflare Worker that locates the m3u8 URL in the Source Code of the "NOW Türkiye" Website and forwards to it.

## How to use

**Note:** You need a free Cloudflare account. You can create an account [here](https://dash.cloudflare.com/sign-up).

1. Open the [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to "Workers & Pages"
3. Click on "Create application"
4. Click on "Create Worker"
5. Give your Worker a name
6. Click on "Deploy"
7. Click on "Edit Code"
8. Paste the code from the "worker.js" file in the repo
9. Click on "Deploy"

You can now use your Worker with the following link: 

    https://[myworker].[myusername].workers.dev/live/index.m3u8
