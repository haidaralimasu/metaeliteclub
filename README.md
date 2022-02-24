# Crypto Hippos NFT Smart Contract

## Installation and Setup

1. [Install Brownie](https://eth-brownie.readthedocs.io/en/stable/install.html) & [Ganache-CLI](https://github.com/trufflesuite/ganache-cli), if you haven't already.

2. Sign up for [Infura](https://infura.io/) and generate an API key. Store it in the `WEB3_INFURA_PROJECT_ID` environment variable. You can [learn more about environment variables here](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html). If you're unfamiliar with environment variables you can just add all these commands to your `.env` file and run `source .env` when you're done.

```bash
export WEB3_INFURA_PROJECT_ID=YourProjectID
```

3. Sign up for [Etherscan](www.etherscan.io) and generate an API key. This is required for fetching source codes of the mainnet contracts we will be interacting with. Store the API key in the `ETHERSCAN_TOKEN` environment variable.

```bash
export ETHERSCAN_TOKEN=YourApiToken
```

4. Download the mix.

```bash
brownie bake aave-flashloan
```

5. Add your `PRIVATE_KEY` environment variable, with [a private key from you wallet.](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key). \*Note: If using metamask, you'll have to add a `0x` to the start of your private key)
