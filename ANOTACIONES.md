***push an existing repository from the command line***
git remote add origin https://github.com/adrianpicolla/proyectoTT.git
git branch -M main
git push -u origin main

***ACTUALIZAR EL REPOSITORIO***
git add .
git commit -m "v05"
git push -u origin main

***INSTALAR REACT***
npm install react-router-dom
npm install react-bootstrap bootstrap

***INSTALAR FONTAWESOME***
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
# If you also need brand or regular icons:
npm i --save @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons