# Module Federation Test
This code is written by following Stephen Grinders (MFE course)[https://www.udemy.com/course/microfrontend-course/].

### Overview
It consists of one container and 3 fragments app. The container and two of the apps are written in React, while the last one is written in Vue. 

### Navigation
The container uses browser router, while the child apps uses in memory router. Auth state is communicated via callbacks.

### Develop
The apps can be run indivudially or via the container.

### Architecture
The apps are deployed to an S3 bucket. Cloudfront is used as CDN.