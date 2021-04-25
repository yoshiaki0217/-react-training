import React,{ useState } from 'react';
import styled from 'styled-components';

export const Contact = ()=>{  
  const [name, setName] = useLocalStorage("name", "");
  const [mail, setMail] = useLocalStorage("mail", "");
  const [nameAlert, setNameAlert] = useState(false);
  const [mailAlert, setMailAlert] = useState(false);
  const [nameError, setNameError] = useState(true);
  const [mailError, setMailError] = useState(false);

  const onClickAdd = () => {
        // 両方がバリデーションを通らないと送信できないよ
    if (nameError === mailError) {
      setName("")
      setMail("")
    }
    // 送信ボタンを押したあと、名前が入力されているかバリデーションをかける。
    if (!name) {
      nameAlert || setNameAlert(true); // nameAlertがfalseだったら、右側を実行する。
      setNameError(false)
    } else {
      nameAlert && setNameAlert(false); // nameAlertがtrueだったら、右側を実行する。名前必須のエラーメッセージが出ていた場合、名前を入力して登録ボタンを押すと、メッセージが消える。
      localStorage.setItem("Namedata",name );
      // setNameAlert(true);
      setNameError(true)
    }
    if (!mail) {
      mailAlert || setMailAlert(true); // nameAlertがfalseだったら、右側を実行する。
    }else if (!/\S+@\S+\.\S+/.test(mail)){
      mailAlert || setMailAlert(true);
    }else {
      mailAlert && setMailAlert(false); // nameAlertがtrueだったら、右側を実行する。名前必須のエラーメッセージが出ていた場合、名前を入力して登録ボタンを押すと、メッセージが消える。
      localStorage.setItem("Mailedata",mail );
      // setMailAlert(true);
      setMailError(true)
    }

  };

  return (
    <Wrapp>
      <input
        type="text"
        placeholder="名前入れて"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameAlert && <p>え？お前、名前ないん？</p>}
      <input
        type="text"
        placeholder="メアド入れて"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      {mailAlert && <p>ちゃんと入れてくれんと困るで</p>}
      <button onClick={onClickAdd}>送信</button>
    </Wrapp>
  );
}
// Hook
function useLocalStorage(key, initialValue) {
  // 初期状態関数をuseStateに渡して、ロジックが1回だけ実行されるようにする。
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // キーでローカルストレージから取得
      const item = window.localStorage.getItem(key);
      // 保存されたjsonを解析するか、何も返さない場合はinitialValueを返します
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // エラーの場合もinitialValueを返します
      console.log(error);
      return initialValue;
    }
  });
  // useStateのセッター関数のラップされたバージョンを返します
  // 新しい値をlocalStorageに保持します。
  const setValue = (value) => {
    try {
      // useStateと同じAPIを持つように、値を関数にすることができます
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // 状態を保存
      setStoredValue(valueToStore);
      // ローカルストレージに保存
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // より高度な実装はエラーケースを処理します
      console.log(error);
    }
  };
  return [storedValue, setValue];
}


const Wrapp = styled.div`
  text-align: center;
  font-size:16px;
  color:red;
  input{
    display:block;
    margin:10px auto;
    height:30px;
    width:200px;
  }
`;