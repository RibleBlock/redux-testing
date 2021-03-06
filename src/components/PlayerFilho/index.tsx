import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectList } from '../../store/ListaAleatoria/reducer';

export function PlayerFilho() {
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState<string>('');

  return (
    <>
      <h1>PLAYERFilho</h1>
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        style={{ fontSize: 16 }}
      />
      <button
        onClick={() => dispatch(addItem(inputText))}
        type="button"
        style={{ fontSize: 16 }}
      >
        Adicionar item
      </button>
      <ol style={{ backgroundColor: '#10101055', fontSize: 16 }}>
        { list?.map((item) => (
          <li key={item}>
            { item }
          </li>
        )) }
      </ol>
    </>
  );
}
