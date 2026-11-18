# Unfold サポートサイト

Unfold iOSアプリの日本語サポートページとプライバシーポリシーを配信する、アプリ本体とは別の静的サイト用リポジトリです。アプリのソースコード、ビルド成果物、開発履歴は含めません。

HTML/CSS/JavaScriptのみで動作し、外部ライブラリ、分析SDK、広告タグ、ビルドサービスは使いません。

## 公開前に設定する項目

`config.js` の次の値を実際の情報に変更してください。空のままではページに公開前TODOが表示されます。

- `supportEmail`: 問い合わせ先メールアドレス
- `operatorName`: 運営者名
- `effectiveDate`: ポリシー発効日

広告SDKの設定、UMP同意、ATT要否、App Store ConnectのApp Privacy回答は、提出するアプリビルドと照合してからポリシーを公開してください。未確認の事項はページ内TODOに残しています。

## GitHub Pagesで公開する

1. このフォルダの内容だけをGitHubの**新しい公開リポジトリ**へpushします（例: `unfold-support`）。アプリ本体のリポジトリは非公開のままにします。
2. 公開リポジトリの **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選びます。
3. `main`へpushするか、Actionsから `Deploy Unfold support site` を手動実行します。
4. 成功したらSettings → Pagesに表示されたURLを開き、トップ、サポート、プライバシーの各ページを確認します。
5. 問題がなければサポートURLとプライバシーポリシーURLをApp Store Connectへ登録します。

プロジェクトサイトURLは通常 `https://<owner>.github.io/<repository>/` です。相対リンクを使っているため、リポジトリ名を含むURLでも動作します。GitHub Freeでは公開リポジトリのPagesを利用できます。[GitHub Pagesのカスタムワークフロー](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) ／ [Pagesの公開元設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 注意

公開リポジトリに含まれるHTML/CSS/JavaScriptは公開されます。公開するのはこのサイト用ファイルだけで、アプリ本体のソースや履歴はこのリポジトリへコピーしないでください。サポート/プライバシーのウェブページも公開URLから誰でも閲覧できます。
