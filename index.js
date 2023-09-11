  // Funciones que resetean los campos donde se introduce la fecha de nacimiento(birthDate) y la edad (ageDate).
  
  const resetBirthDate = () => {
    document.getElementById('birth-day').value = '';
    document.getElementById('birth-month').value = '';
    document.getElementById('birth-year').value = '';
  }
  
  const resetAgeDate = () => {
    document.getElementById('age-date-day').innerText = '- -';
    document.getElementById('age-date-month').innerText = '- -';
    document.getElementById('age-date-year').innerText = '- -';
  }
  
  const init = () => {
    resetBirthDate();
    resetAgeDate();
  }

// Se crean una serie de constantes y variables que se utilizarán en las distintas funciones.

const app = () => {
  const birthDay = document.getElementById('birth-day').value;
  const birthMonth = document.getElementById('birth-month').value;
  const birthYear = document.getElementById('birth-year').value;
  const fechaNacimiento = {
                          'dd': birthDay,
                          'mm': birthMonth,
                          'yyyy': birthYear
                          }
  
  const todayDay = (new Date().getDate());
  const todayMonth = (new Date().getMonth() + 1);
  const todayYear = (new Date().getFullYear());
  const fechaActual = {
                      'dd': todayDay.toString().padStart(2, '0'),
                      'mm': todayMonth.toString().padStart(2, '0'),
                      'yyyy': todayYear.toString().padStart(2, '0')
                      }
  
  const error = document.querySelectorAll('.error')
  const monthDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  var days = fechaActual.dd - fechaNacimiento.dd;
  if((fechaActual.dd - fechaNacimiento.dd) < 0) {
    const provDay = monthDays[fechaActual.mm -1]
    days = provDay + days;
  }
  
  var months = fechaActual.mm - fechaNacimiento.mm;
  if((fechaActual.dd - fechaNacimiento.dd) < 0) {
    months = months - 1;
  }
  if(todayMonth <= fechaNacimiento.mm) {
    months = 12 + months;
  }
  
  var years = (fechaActual.yyyy - fechaNacimiento.yyyy);
  if((fechaActual.mm - fechaNacimiento.mm) < 0) {
    years = years - 1;
  } else if((fechaActual.mm - fechaNacimiento.mm) === 0 && fechaActual.dd - fechaNacimiento.dd){
    years = years - 1;
  }

  /*
  Funciones que devuelven el estilo css a su estado original, si se corrige el error.
  */
  
  const noErrorBirthDay = () => {
    document.querySelector('.day-error').innerText = '';
    document.querySelector('#birth-day').style.border = '1px solid var(--lighth-grey)';
    document.querySelector('#birth-date-day h2').style.color = 'var(--smoke-grey)';
    console.log('noErrorBirthDay')
    return false;
  }
  
  const noErrorBirthMonth = () => {
    document.querySelector('.month-error').innerText = '';
    document.querySelector('#birth-month').style.border = '1px solid var(--lighth-grey)';
    document.querySelector('#birth-date-month h2').style.color = 'var(--smoke-grey)';
    console.log('noErrorBirthMonth')
    return false;
  }
  
  const noErrorBirthYear = () => {
    document.querySelector('.year-error').innerText = '';
    document.querySelector('#birth-year').style.border = '1px solid var(--lighth-grey)';
    document.querySelector('#birth-date-year h2').style.color = 'var(--smoke-grey)';
    console.log('noErrorBirthYear')
    return false;
  }
  
  // Comprueba si hay algún error en el campo día.
  const errorBirthDay = () => {
    if (birthDay > monthDays[birthMonth]) {
      document.querySelector('.day-error').innerText = 'Must be a valid date';
      document.querySelector('#birth-day').style.border = '1px solid var(--light-red)';
      document.querySelector('#birth-date-day h2').style.color = 'var(--light-red)';
      console.log('errorValidDate')
      return true;
    } else if (birthDay > 31 || birthDay < 0) {
      document.querySelector('.day-error').innerText = 'Must be a valid day';
      document.querySelector('#birth-day').style.border = '1px solid var(--light-red)';
      document.querySelector('#birth-date-day h2').style.color = 'var(--light-red)';
      console.log('errorValidDay')
      return true;
    } else if (typeof birthDay === 'string' && birthDay.length === 0) {
      document.querySelector('.day-error').innerText = 'This field is required';
      document.querySelector('#birth-day').style.border = '1px solid var(--light-red)';
      document.querySelector('#birth-date-day h2').style.color = 'var(--light-red)';
      console.log('errorDayFieldRequired')
      return true;
    } else {
      noErrorBirthDay();
    }
  }


  // Comprueba si hay algún error en el campo mes.
  const errorBirthMonth = () => {
    if (birthMonth > 12 || birthMonth < 0) {
      document.querySelector('.month-error').innerText = 'Must be a valid month';
      document.querySelector('#birth-month').style.border = '1px solid var(--light-red)';
      document.querySelector('#birth-date-month h2').style.color = 'var(--light-red)';
      console.log('errorValidMonth')
      return true;
    } else if (typeof birthMonth === 'string' && birthMonth.length === 0){
      document.querySelector('.month-error').innerText = 'This field is required';
      document.querySelector('#birth-month').style.border = '1px solid var(--light-red)';
      document.querySelector('#birth-date-month h2').style.color = 'var(--light-red)';
      console.log('errorMonthFieldRequired')
      return true;
    } else {
      noErrorBirthMonth();
    }
  }

    // Comprueba si hay algún error en el campo año.
    const errorBirthYear = () => {
      if (birthYear > todayYear) {
        document.querySelector('.year-error').innerText = 'Must be in the past';
        document.querySelector('#birth-year').style.border = '1px solid var(--light-red)';
        document.querySelector('#birth-date-year h2').style.color = 'var(--light-red)';
        console.log('errorYearInThePast')
        return true;
      } else if (typeof birthYear === 'string' && birthYear.length === 0) {
        document.querySelector('.year-error').innerText = 'This field is required';
        document.querySelector('#birth-year').style.border = '1px solid var(--light-red)';
        document.querySelector('#birth-date-year h2').style.color = 'var(--light-red)';
        console.log('errorYearFieldRequired')
        return true;
      } else {
        noErrorBirthYear();
      }
    }
  

  // Se crea un array donde se almacena de forma independiente, en día, mes o año, si hay error en los datos introducidos
  const errorsArray = [errorBirthDay(),
                      errorBirthMonth(),
                      errorBirthYear()]
  
  
  // Detecta que no haya ningun error
  
    console.log(errorsArray)

    // En caso de que no haya errores, devuelve la edad calculada.
    if(errorsArray.includes(true) === false){
      document.getElementById('birth-day').value = birthDay.toString().padStart(2, '0');
      document.getElementById('birth-month').value = birthMonth.toString().padStart(2, '0');
      document.getElementById('birth-year').value = birthYear.toString().padStart(4, '0');
      document.getElementById('age-date-day').innerText = days;
      document.getElementById('age-date-month').innerText = months;
      document.getElementById('age-date-year').innerText = years;
      error.forEach(function(obj) {
        obj.style.innerText = 'hidden';
      })
      console.log('todo ok')
      console.log(monthDays[birthMonth])
    // en caso de que haya algun error, devuelve el mensaje adecuado, y limpia la zona de visualización de edad hasta que se corrija el error.
    } else {
      resetAgeDate();
      errorBirthDay();
      errorBirthMonth();
      errorBirthYear();
      console.log(errorsArray)
      console.log('Hay algun error en los datos introducidos');
    }
}

