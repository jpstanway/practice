# Use existing image as a base
FROM alpine

# Download an install dep
RUN apk add --update redis
RUN apk add --update gcc

# Tell image what to do when it starts
CMD ["redis-server"]