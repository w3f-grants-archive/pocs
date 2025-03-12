#!/bin/bash

set -e  

echo "Setting up cargo-contract"
cd ink-contracts
rustup component add rust-src
cargo install --force --locked cargo-contract
cd ..

build_contract() {
    local contract_path=$1
    local contract_name=$2

    echo "Building $contract_path"
    cd $contract_path
    cargo contract build

    mv -f target/ink/$contract_name.contract ../../contracts
    cd - > /dev/null
}

declare -A contracts=(
    ["ink-contracts/chain_extensions/delegate_at"]="delegate_at"
    ["ink-contracts/chain_extensions/delegate_to"]="delegate_to"
    ["ink-contracts/chain_extensions/reputation"]="reputation"
    ["ink-contracts/chain_extensions/stake_score"]="stake_score"
    ["ink-contracts/delegate_registry"]="delegate_registry"
    ["ink-contracts/extras/flipper"]="flipper"
    ["ink-contracts/extras/simple_caller"]="simple_caller"
)

for path in "${!contracts[@]}"; do
    build_contract "$path" "${contracts[$path]}"
done

echo "Building solo-substrate-chain"
cd solo-substrate-chain
chmod +x setup.sh && ./setup.sh
cd ..

echo "Build process completed!"
