#!/bin/bash
cd /home/ec2_inmanager/server
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
yum -y install nodejs npm