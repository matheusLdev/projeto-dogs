import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';
import { useNavigate } from 'react-router-dom';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar a foto ?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload(navigate('/projeto-dogs/'))
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>Apagando</button> 
      ) : (
        <button onClick={handleClick} className={styles.delete}>Apagar Foto</button> 
      )}
    </>
  )
}

export default PhotoDelete;