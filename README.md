# Quiz App

Pequeña app de quiz con:

- 3 opciones por pregunta
- Resaltado verde para correcta y rojo para equivocada
- Revela la respuesta correcta si fallas
- Puntaje acumulado (+1 por acierto)
- Cambiar imagen de fondo (subir imagen)
- Subir audio para pregunta y opciones
- Barra de tiempo de 5 segundos por pregunta

Cómo usar:

1. Abrir `index.html` en el navegador o servir la carpeta con un servidor estático.

2. En la sección "Ajustes" puedes cargar una imagen de fondo y audios (pregunta/opciones) para la pregunta actual.

3. Responde haciendo clic en una opción. El temporizador es de 5 segundos; si expira se revela la respuesta correcta.

Comando rápido (PowerShell) para servir la carpeta localmente:

```powershell
cd "c:\CARLOS\OneDrive\2026\2.Febrero\3.Canal Trampa Mental\0.Crear App para san valentin"
python -m http.server 8000
```
