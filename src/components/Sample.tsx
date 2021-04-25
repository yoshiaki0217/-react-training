import React,{ useState } from 'react';

export const Sample = ()=>{
  const [name, setName] = useState();
  const onChangeName = (event) => setName(event.target.value);
  // メールアドレスをセット
  const [email, setEmail] = useState("");
  const onChangeEmail = (event) => setEmail(event.target.value);

  // バリデーションメッセージ
  const [nameAlert, setNameAlert] = useState(false);
  // サクセスメッセージ
  const [success, setSuccess] = useState(false);

  const onClickAdd = () => {
    // 送信ボタンを押したあと、名前が入力されているかバリデーションをかける。
    if (!name) {
      nameAlert || setNameAlert(true); // nameAlertがfalseだったら、右側を実行する。
    } else {
      localStorage.setItem("localName", name);
      nameAlert && setNameAlert(false); // nameAlertがtrueだったら、右側を実行する。名前必須のエラーメッセージが出ていた場合、名前を入力して登録ボタンを押すと、メッセージが消える。
      localStorage.setItem("localMail", email);
      success || setSuccess(true); // nameとemailの登録ができたら、setSuccessをtrueに変更する。
    }
  };

  // localStorageの中身を削除。テスト用。不要になったら消す。
  const onClickDelete = () => {
    localStorage.clear();
  };
  return(
    <>
      <div className="App">
        <p>{localStorage.getItem("email")}</p>
      <label>
        名前：
        <input
          placeholder="名前を入力"
          defaultValue={localStorage.getItem("name")}
          value={name}
          onChange={onChangeName}
          type="text"
          name="name"
        />
      </label>

      {/* 名前が入力されていなかったら、エラーメッセージを表示。 */}
      {nameAlert && <p>名前を入れろよな('ω')9m</p>}

      <br />
      <label>
        メールアドレス：
        <input
          placeholder="メールアドレスを入力"
          defaultValue={localStorage.getItem("email")}
          value={email}
          onChange={onChangeEmail}
          type="text"
          name="email"
        />
      </label>
      <br />
      {success && <p>登録してやったぞ('ω')9m</p>}
      <br />
      <button onClick={onClickAdd}>送信</button>
      <button onClick={onClickDelete}>削除</button>
    </div>
    </>
  )
}