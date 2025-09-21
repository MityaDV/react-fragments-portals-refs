import Card from '../UI/Card';
import styles from './CreateUser.module.css';
import Button from '../UI/Button';
import React, { Fragment, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../helpers/Wrapper';

const CreateUser = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const createUserHandler = (e) => {
    e.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return setError({
        title: 'Некорректный ввод',
        message: 'Эти поля не могут быть пустыми'
      });
    }

    if (+inputAge < 1) {
      return setError({
        title: 'Некорректный возраст',
        message: 'Возраст должен быть больше 0'
      });
    }
    // console.log('inputName', inputName, 'inputAge', inputAge);
    props.onCreateUser(inputName, inputAge);
    setInputName('');
    setInputAge('');
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // Используем компонент обертку - Wrapper - один из способов
    // <Wrapper>
    // Но так же в React есть встроенные компоненты обертки React.Fragment
    // <React.Fragment>
    // Короткая запись с импортом Fragment
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form action="" onSubmit={createUserHandler}>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </Fragment>
    // </Wrapper>
  );
};
export default CreateUser;
