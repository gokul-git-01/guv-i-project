# Use official Nginx image
FROM nginx:latest

# Set working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy build files into the container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

