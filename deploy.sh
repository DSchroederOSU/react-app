#!/bin/bash

DEPLOY_USERNAME="schrodan"
DEPLOY_HOST="flip.engr.oregonstate.edu"
DEPLOY_DEST_DIR="public_html/build"
DEPLOY_SRC_DIR="build"

STASH_SUCCEEDED=false
if git stash --include-untracked; then
  STASH_SUCCEEDED=true
fi
npm run build
rsync -avz --delete ${DEPLOY_SRC_DIR}/ ${DEPLOY_USERNAME}@${DEPLOY_HOST}:${DEPLOY_DEST_DIR}/
if [[ ${STASH_SUCCEEDED} == true ]]; then
  git stash pop
fi