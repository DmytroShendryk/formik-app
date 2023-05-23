const Validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Поле Ім\'я обов\'язкове для заповнення';
    }

    if (!values.email) {
      errors.email = 'Поле Електронна пошта обов\'язкове для заповнення';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Неправильний формат електронної пошти';
    }

    if (!values.phone) {
      errors.phone = 'Поле Телефон обов\'язкове для заповнення';
    } else if (!/^\d{12}$/.test(values.phone)) {
      errors.phone = 'Довжина телефонного номера має бути 12 символів';
    }

    return errors;
  };
export default Validate