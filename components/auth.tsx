import app from "../lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Auth() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // アクセストークンを得る
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // 得られるユーザーデータ
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(
          "サインイン時にエラーが発生しました：",
          errorCode,
          errorMessage
        );
      });
  }

  function signOut() {
    // auth.onAuthStateChanged(() => {
    //   auth
    //     .signOut()
    //     .then(() => {
    //       console.log("ログアウトしました");
    //       location.reload();
    //     })
    //     .catch((error) => {
    //       console.log("ログアウト時にエラーが発生しました", error);
    //     });
    // });
  }

  function handleClickSignIn() {
    signIn();
  }

  function handleClickSignOut() {}

  return (
    <>
      <button onClick={handleClickSignIn}>サインイン</button>
      <button onClick={handleClickSignOut}>サインアウト</button>
    </>
  );
}
