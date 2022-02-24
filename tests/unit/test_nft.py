import pytest
from brownie import network, CryptoHippos, convert, web3
from scripts.helpful_scripts import get_account
from web3 import Web3


def test_can_owner_mint():
    if network.show_active() not in ["development"] or "fork" in network.show_active():
        pytest.skip("Only for local testing")
    nft = CryptoHippos.deploy(
        'Crypto Hippo',
        'CH',
        'https://gateway.pinata.cloud/ipfs/QmbM5YQu4YGLsdXbV4eptzePaRxdTnCJPNjQUYQNEmQy2V/',
        {"from": get_account()}
    )
    nft.mint(1)
    assert nft.ownerOf(1) == get_account()


def test_normal_user_can_mint():
    if network.show_active() not in ["development"] or "fork" in network.show_active():
        pytest.skip("Only for local testing")
    owner = get_account()
    non_owner = get_account(1)
    nft = CryptoHippos.deploy(
        'Crypto Hippo',
        'CH',
        'https://gateway.pinata.cloud/ipfs/QmbM5YQu4YGLsdXbV4eptzePaRxdTnCJPNjQUYQNEmQy2V/',
        {"from": owner}
    )
    print(non_owner)
    if nft.paused == True:
        nft.pause("false", {"from": owner})
    if nft.onlyWhitelisted == True:
        nft.setOnlyWhitelisted(False, {"from": owner})
    amount = web3.toWei(0.012, 'ether')
    nft.mint(2, {"from": non_owner}, {"value": amount}, )
    assert nft.ownerOf(2) == non_owner
