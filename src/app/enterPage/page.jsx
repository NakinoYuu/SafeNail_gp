"use client";
import { useState } from "react";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/enter/enter.css";
import "@/styles/Components/button.css";

import BackButton from "../Components/backButton";
import Header from "../Components/header";
import Footer from "../Components/footer";

import Link from "next/link";

export default function EnterPage() {
  // const [errors, setErrors] = useState({});
  // const validate = () => {
  //   const e = {};

  //   if (!form.email) e.email = "未入力です。入力してください。";
  //   if (!form.firstName) e.firstName = "未入力です。入力してください。";
  //   if (!form.zip) e.zip = "未入力です。入力してください。";
  //   if (!form.pref) e.pref = "未選択です。選択してください。";
  //   if (!form.city) e.city = "未入力です。入力してください。";
  //   if (!form.address) e.address = "未入力です。入力してください。";
  //   if (!form.tel) e.tel = "未入力です。入力してください。";
  //   if (!form.pay) e.pay = "未選択です。選択してください。";

  //   setErrors(e);
  //   return Object.keys(e).length === 0;
  // };

  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    email: "",
    lastName: "",
    firstName: "",
    zip: "",
    pref: "",
    city: "",
    address: "",
    tel: "",
    pay: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const goConfirm = () => {
    setStep(1);
  };

  // ↑エラーなしver.
  // ↓エラーありver.

  // const goConfirm = () => {
  //   if (validate()) setStep(1);
  // };

  const goComplete = () => {
    const body = `
メールアドレス: ${form.email}
お名前: ${form.lastName} ${form.firstName}
郵便番号: ${form.zip}
都道府県: ${form.pref}
市区町村: ${form.city}
住所: ${form.address}
電話番号: ${form.tel}
お支払い方法: ${form.pay}
`;
    window.location.href = `mailto:mailAddress@jmail.com?subject=ご注文内容&body=${encodeURIComponent(
      body,
    )}`;
    setStep(2);
  };

  const prefectures = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  return (
    <div className="eachPage">
      <Header />
      <div className="enter">
        <div className="headline">
          <h2 className={step === 0 ? "active" : ""}>入力</h2>
          <h2 className={step === 1 ? "active" : ""}>確認</h2>
          <h2 className={step === 2 ? "active" : ""}>完了</h2>
        </div>
        {/* 入力画面 */}
        {step === 0 && (
          <div className="formCardContents">
            <div className="formCard">
              <div className="formCardWrapper">
                <h2>メールアドレス</h2>
                <input
                  name="email"
                  placeholder="メールアドレス"
                  onChange={handleChange}
                />
                {/* {errors.email && <p className="error">{errors.email}</p>} */}
                <h2>お届け先情報</h2>
                <div className="twoCol">
                  <input
                    name="lastName"
                    placeholder="お名前(姓)"
                    onChange={handleChange}
                  />
                  <input
                    name="firstName"
                    placeholder="お名前(名)"
                    onChange={handleChange}
                  />
                </div>
                {/* {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )} */}
                <input
                  name="zip"
                  placeholder="郵便番号"
                  onChange={handleChange}
                />
                {/* {errors.zip && <p className="error">{errors.zip}</p>} */}
                <select name="pref" onChange={handleChange} defaultValue="">
                  <option value="" disabled>
                    都道府県を選択してください
                  </option>
                  {prefectures.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {/* {errors.pref && <p className="error">{errors.pref}</p>} */}
                <input
                  name="city"
                  placeholder="市区町村"
                  onChange={handleChange}
                />
                {/* {errors.city && <p className="error">{errors.city}</p>} */}
                <input
                  name="address"
                  placeholder="番地・建物名・部屋番号"
                  onChange={handleChange}
                />{" "}
                {/* {errors.address && <p className="error">{errors.address}</p>} */}
                <input
                  name="tel"
                  placeholder="電話番号"
                  onChange={handleChange}
                />{" "}
                {/* {errors.tel && <p className="error">{errors.tel}</p>} */}
                <h2>お支払い方法(お支払い確認後発送いたします。)</h2>
                <label className="radio">
                  <input
                    type="radio"
                    name="pay"
                    value="クレジット決済"
                    onChange={handleChange}
                  />
                  振り込み
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="pay"
                    value="コンビニ決済"
                    onChange={handleChange}
                  />
                  コンビニ決済
                </label>
                {/* {errors.pay && <p className="error">{errors.pay}</p>} */}
                <button className="next" onClick={goConfirm}>
                  入力内容の確認へ
                </button>
              </div>
            </div>
          </div>
        )}
        {/* 確認画面 */}
        {step === 1 && (
          <div className="formCardContents">
            <div className="formCard confirm">
              <p>
                メールアドレス：<span>{form.email}</span>
              </p>
              <p>
                お名前：
                <span>
                  {form.lastName} {form.firstName}
                </span>
              </p>
              <p>
                郵便番号：<span>{form.zip}</span>
              </p>
              <p>
                住所：
                <span>
                  {form.pref} {form.city} {form.address}
                </span>
              </p>
              <p>
                電話番号：<span>{form.tel}</span>
              </p>
              <p>
                お支払い方法：<span>{form.pay}</span>
              </p>
              <p className="important">
                ご注文はまだ未確定です。
                <br />
                右下のボタンを押した後、メールで送信ボタンを押してください。
              </p>
              <button className="next" onClick={goComplete}>
                メールで注文を確定する
              </button>
            </div>
            <div className="backButton" onClick={() => setStep(0)}>
              <button className="back">
                <p>入力画面へ戻る</p>
              </button>
            </div>
          </div>
        )}
        {/* 完了画面 */}
        {step === 2 && (
          <div className="complete">
            <h5>
              ご注文ありがとうございます。
              <br />
              決済が完了しました！
            </h5>
            <div className="doneLogo"></div>
            <Link href="/">
              <div className="backButton">
                <BackButton />
              </div>
            </Link>
          </div>
        )}
      </div>

      <Footer />

      <style jsx>{`
        // .headline .active {
        //   background: #fff;
        //   color: #333;
        // }

        // .radio input {
        //   accent-color: #333;
        //   width: 1.6rem;
        //   height: 1.6rem;
        // }
      `}</style>
    </div>
  );
}
