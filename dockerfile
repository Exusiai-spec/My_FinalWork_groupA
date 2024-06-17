# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:latest

# 将本地的 HTML 文件复制到 Nginx 默认的网站根目录
COPY ./ /usr/share/nginx/html

# 暴露 Nginx 默认的 HTTP 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]