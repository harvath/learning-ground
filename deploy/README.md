# Self-hosting the Learning Ground (Ubuntu + nginx)

> **Note:** the primary way this site is served is now [GitHub Pages](../README.md#live-site).
> Use this guide only if you specifically want to self-host instead (e.g. no
> internet access, or you don't want the repo public).

The site is **static HTML/CSS/JS** — no build step. Editing any file (e.g. via a
remote Claude session) is live on the next refresh.

## One-time setup on the Ubuntu machine

```bash
# 1. Get the repo onto the box (pick one)
sudo mkdir -p /var/www/learning-ground
sudo chown "$USER" /var/www/learning-ground
git clone <your-repo-url> /var/www/learning-ground
#   …or rsync/scp the folder there.

# 2. Install nginx (minimal)
sudo apt update && sudo apt install -y nginx

# 3. Install this site config
sudo cp /var/www/learning-ground/deploy/nginx.conf \
        /etc/nginx/sites-available/learning-ground
sudo ln -sf /etc/nginx/sites-available/learning-ground \
        /etc/nginx/sites-enabled/learning-ground
sudo rm -f /etc/nginx/sites-enabled/default   # drop the stock page

# 4. Check + start
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl enable nginx   # auto-start on boot
```

If the repo lives somewhere other than `/var/www/learning-ground`, edit the
`root` line in `deploy/nginx.conf` before step 3. nginx must be able to read the
path (keep it out of a private `$HOME`, or grant the `www-data` user access).

## View from mobile

- **Same Wi-Fi (LAN):** find the box's IP with `ip -4 addr show` (or `hostname -I`),
  then open `http://<that-ip>/` on your phone. Make sure port 80 is open
  (`sudo ufw allow 80` if ufw is on).
- **From anywhere (recommended):** install [Tailscale](https://tailscale.com/) on
  the Ubuntu box and your phone — you then reach it at its Tailscale IP/hostname
  with no port-forwarding and no exposing it to the public internet.

## Updating content

Edit files under the repo (locally, or via a remote Claude session on the box),
`git pull` / save, refresh the browser. HTML is served `no-cache`, so changes
appear immediately; CSS/JS are cached 5 min (hard-refresh if needed).

## Entry points

- `/` → top page (all topics)
- `/japanese-mythology/index.html` → Japanese-mythology index (lessons + references)
