#!/bin/sh

# Take the deb and bundle it into a apt repository
if [[ $# -lt 1 ]]
then
    echo "Usage $0 <config dir>"
    exit
fi

confdir=$1

set -ex

ver=`jq -r .version package.json`
distdir=$PWD/dist
confdir=$PWD/$confdir

repodir=`mktemp -d -t repo`
mkdir $repodir/conf
cp $confdir/conf_distributions $repodir/conf/distributions

pushd $repodir
for i in `cat conf/distributions | grep Codename | cut -d ' ' -f 2`
do
    reprepro includedeb $i $distdir/element-desktop_${ver}_amd64.deb
done

tar cvzf $distdir/element-desktop_repo_$ver.tar.gz .

popd

rm -r $repodir
