
const analyzer = {
  getWordCount: (text) => {
    //Eliminar espacios adelante y al final
    const wordsCount = text.trim().split(/\s+/); // 'text.trim' Es un método que se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto.
    // .split(/\s+/) Después de eliminar los espacios en balnco adicionales, el método 'split()
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Devolver el recuentro de palabras
    return wordsCount.length;

  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    
    console.log("cantidadDeCaracteres: " + text.length)
    // Devolver el recuento de Caracteres

    return text.length;
  
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    
    const cleanedText= text.replace(/\W/g, "")
    
    console.log(" RecuentoDeEspaciosSignos: " + cleanedText.length)   

    // Regresa el valor almacenado en la cadena del texto
 
    return cleanedText.length;
  },

  getAverageWordLength: (text) => { // DIVIDIR EL NUMERO DE LETRAS CON EL NUMERO DE PALABRAS 
    // COMO OBTENGO LA CANTIDAD DE LETRAS TOTALES Y COMO OBTENGO EL NUMERO DE PALABRAS
    // DIVIDIR EL NUMERO DE LETRAS CON LA CANTADIDAD DE PALABRAS Y ESA ES LA LONGITUD.
    // GUIARME EL METODO REACTOR
    // FAMILIARIZARME CON EL CÓDIGO
    //

    const words = text.trim().split(" ").length;
    
    const length = text.replace(/\W/g, "").length;

    const longitudPromedio = length / words;

    return longitudPromedio;

    











  }, 
  

  
  getNumberCount: (text) => {

    // Identificar los números del texto
    // realizar un bucle de los números ingresados
    // retornar el resultadp 
    
    const numberCount = text.split(' '); // Convertir en Array usando split// usar el for para recorrer el array e ir preguntando si es un número // si es un número que se vaya guardando dentro de un contador // retornar el contador // otra opción: los numeros que se van encontrando guardarlos dentro de un array //  retornar el .length sobre el array // 
    
    let result = 0;
    for ( let i = 0 ; i < numberCount.length; i++){
      const number = parseInt(numberCount[i]);
      if (typeof number === "number" && !isNaN(number)) {
        result++; } 
    }
    
     
    console.log("Numeros:", result);   
    
    return result;
  

     



  },
    
  
    
   
  



  getNumberSum: (text) => {

    // Identificar los números en el texto
    // sumar los números
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
    const numberSum = text.split (' '); // Divide el texto en palabras y crea un array

    let sum = 0 // La suma desde cero

    for (let i = 0; i < numberSum.length; i++) {
      const number = parseFloat(numberSum[i]);

      if (typeof number === "number" && !isNaN(number)) {
        sum += number;
      }
    }

    console.log("Suma de Números:", sum);

    return (sum*100)/100;
    
    
  
    

    
  },


  
};
export default analyzer

