#!/bin/bash
mkdir -p public/assets

# Function to download
download_file() {
    url="$1"
    filename=$(basename "$url")
    curl -s -o "public/assets/$filename" "$url"
    echo "Downloaded $filename"
}

# List of assets
download_file "http://localhost:3845/assets/fde13eaf788be23e82c4fede7454f58cdfb513d7.svg"
download_file "http://localhost:3845/assets/ec70190d3379dbc9a3b104bb3eaa51758e7c76af.svg"
download_file "http://localhost:3845/assets/1da7c1bad03c24b2b22b050dc70555c0f8f88a8f.svg"
download_file "http://localhost:3845/assets/8a6390b73769e926b7dfd4ff320b13664295967e.svg"
download_file "http://localhost:3845/assets/fa3ee9bd31fbe8fa510ef51a497cca852bdfacd3.svg"
download_file "http://localhost:3845/assets/d645c60acca952092aadb66d43b0fb7333c2a94b.svg"
download_file "http://localhost:3845/assets/90562c50fdfd079c0ed41d0c86258f942d30195a.svg"
download_file "http://localhost:3845/assets/1652c3c10800008bb143ddd70471f82229302885.svg"
download_file "http://localhost:3845/assets/9f0a87cfee1ec41beb28b47e5dcf5e7532b5585b.svg"
download_file "http://localhost:3845/assets/89e136283dd51fddb3fc4b2690b593ee4fa206c8.svg"
download_file "http://localhost:3845/assets/19a4baa3c6b1498c80155afecfead2efeae90869.svg"
download_file "http://localhost:3845/assets/1a13567ccf7c5ffd91582b2a53463d17d3bc44c2.svg"
download_file "http://localhost:3845/assets/f6e5add6d7e675e7e984dd5d372d76e5e9fe46dc.svg"
download_file "http://localhost:3845/assets/2e15740500d1b41eee89eb97a91123a361501fe4.svg"
download_file "http://localhost:3845/assets/454a1b645f5ec85709725062b685a3bd743b899e.svg"
download_file "http://localhost:3845/assets/a72b290d1a23addacbd7561d2d23896361a8ba54.svg"
download_file "http://localhost:3845/assets/6abf92dc34e0502ee4931450047ddfb96164f859.svg"
download_file "http://localhost:3845/assets/e02d3ac1d6bcc6142058050ed13d1f78556afa33.svg"
download_file "http://localhost:3845/assets/069fbb039d018daff7fc0530500658c058f87c40.svg"
download_file "http://localhost:3845/assets/fdeec34e64b35c3db480c688d12a95346b9bfebf.svg"
download_file "http://localhost:3845/assets/16b897e7c5ea01af9096f4d6927fd7decf395561.svg"
