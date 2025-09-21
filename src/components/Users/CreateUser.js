import Card from '../UI/Card';
import styles from './CreateUser.module.css';
import Button from '../UI/Button';
import React, { Fragment, useRef, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../helpers/Wrapper';

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [inputName, setInputName] = useState('');
  // const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const createUserHandler = (e) => {
    e.preventDefault();
    // console.log('nameInputRef', nameInputRef);
    // console.log('ageInputRef', ageInputRef);
    console.log('nameInputRef value', nameInputRef.current.value);

    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      return setError({
        title: 'Некорректный ввод',
        message: 'Эти поля не могут быть пустыми'
      });
    }

    if (+inputUserAge < 1) {
      return setError({
        title: 'Некорректный возраст',
        message: 'Возраст должен быть больше 0'
      });
    }
    // console.log('inputName', inputName, 'inputAge', inputAge);

    props.onCreateUser(inputUserName, inputUserAge);

    // setInputName('');
    // setInputAge('');
    nameInputRef.current.value = ''; // можно так очищать поле инпута, но НЕ РЕКОМЕНДУЕТСЯ!!!
    ageInputRef.current.value = '';
  };

  // const nameChangeHandler = (e) => {
  //   setInputName(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setInputAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
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
            // onChange={nameChangeHandler}
            // value={inputName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={inputAge}
            ref={ageInputRef}
          />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default CreateUser;
