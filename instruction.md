# настройки виртуальной машины
network: Bridged Adapter

base memory: 4096 MB
processor: 2 CPU
storage: 25 GB (actual 6 GB)

# Ubuntu server
https://ubuntu.com/download/server


# Initial Server Setup with Ubuntu 20.04
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04#step-1-logging-in-as-root

# How To Serve Flask Applications with uWSGI and Nginx on Ubuntu 20.04
https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-20-04#step-3-setting-up-a-flask-application

# Устновка nginx (в начале шага №6)
sudo apt-get install nginx

# клонирование репозитория с помощью git
git clone https://github.com/IlinyhGleb/optim.git


# ошибка с доступом
https://stackoverflow.com/questions/25774999/nginx-stat-failed-13-permission-denied

chmod +x /home/
chmod +x /home/username
chmod +x /home/username/siteroot

# текущая конфигурация ip
192.168.1.1 - шлюз (роутер)
192.168.1.30 - виртуальная машина с nginx, iwsgi, flask (optim)
192.168.1.75 - непосредственно компьютер с nodejs test_request


# установка статического ip
sudo ifconfig enp0s3 192.168.1.30 network 255.255.255.0
sudo route add default gw 192.168.1.1 enp0s3

интерфейс - enp0s3 может быть другим

# CORS ошибки
общая статья:
https://habr.com/ru/companies/otus/articles/706908/
ссылка оттуда на nginx:
https://enable-cors.org/server_nginx.html

ссылка от mozilla:
Reason: CORS header 'Access-Control-Allow-Origin' missing

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default


# подключение по SSH к серверу
https://putty.org/



# запуск текущего frontend сервера на nodejs
предварительно нужно установить nodejs

npm start

