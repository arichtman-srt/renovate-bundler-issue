# renovate-bundler-issue

Expected: bundler resolves and retrieves the Gem from a private endpoint.

Actual: bundler fails with a 401

Prequisites:

- GitLab PAT
- GitHub Access Token (Classic)
- Both of these tokens set in your current environment

See `.env` for details.

Reproduction of bundler issue

`docker run --rm -it -v $(pwd):/src --workdir /src --env-file .env ghcr.io/renovatebot/renovate:35 renovate --enabled-managers bundler`

Production of working bundler in same container

`docker run --rm -it -v $(pwd):/src --workdir /src --env-file .env ghcr.io/renovatebot/renovate:35 ./clone-and-install.sh`

## References

- https://docs.renovatebot.com/getting-started/private-packages/#bundler
- https://github.com/renovatebot/renovate/issues/5023
- https://github.com/renovatebot/renovatebot.github.io/issues/26
- https://github.com/renovatebot/renovate/issues/7315
- https://github.com/renovatebot/renovate/issues/11404
- https://github.com/renovatebot/renovate/discussions/21691
- https://github.com/renovatebot/renovate/discussions/11407
- https://github.com/renovatebot/renovate/discussions/17712

## Development of reproduction

`docker run --rm -it -v $(pwd):/src --workdir /src -u 1000:100  --env-file .env ghcr.io/renovatebot/renovate:35 /bin/bash`
