$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 1000, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });


  $(document).ready(function () {
    $('.accordion-item').hide(); // 初期状態で非表示

    $('.piano-key, .about-do a').on('click', function (e) {
      e.preventDefault();

      const $clicked = $(this);
      const targetId = $clicked.attr('href');
      const $target = $(targetId);


      // すでに開いていて、active もついているなら何もしない（＝連続クリック防止）
      if ($target.is(':visible') && $clicked.hasClass('active')) {
        return;
      }

      // 他のアコーディオンは即座に非表示
      $('.accordion-item').not($target).hide();
      $('.piano-key, .about-do a').removeClass('active');

      // 対象を開いてスクロール
      $target.slideDown(300, function () {
        $('html, body').animate({
          scrollTop: $target.offset().top - 50
        }, 300);
      });

      $clicked.addClass('active');
    });
  });


  // slick初期化
  if ($('.slide-items').length) {
    $('.slide-items').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '40px',
            centerMode: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            centerMode: false,
            centerPadding: '0px'
          }
        }
      ]
    });
  }


  $(document).ready(function () {
    $('.student a').on('click', function (e) {
      e.preventDefault();
      const password = prompt('パスワードを入力してください');
      if (password === 'silasofamiredo') {
        window.location.href = 'files/student-file.pdf';
      } else if (password !== null) {
        alert('パスワードが違います。');
      }
    });
  });


  $(document).ready(function () {
    $('.preview-btn').on('click', function () {
      const box = $('.preview-box');

      // すでに表示されている場合は閉じる
      if (box.is(':visible')) {
        box.slideUp();
        return;
      }

      // フォーム値取得
      const name = $('input[name="name"]').val();
      const topic = $('select[name="topic"]').val();
      const message = $('textarea[name="message"]').val();

      const topicLabel = {
        trial: '体験レッスンについて',
        join: '入会について',
        current: '在籍生のご相談',
        other: 'その他'
      };

      // プレビュー内容生成
      const preview = `
      <p><strong>おなまえ：</strong> ${name}</p>
      <p><strong>ごようけん：</strong> ${topicLabel[topic] || topic}</p>
      <p><strong>メッセージ：</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `;

      $('.preview-content').html(preview);
      box.slideDown()[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // 「閉じる」ボタンで非表示に
    $('.close-preview-btn').on('click', function () {
      $('.preview-box').slideUp();
    });
  });

  $(document).ready(function () {
    $('form').on('submit', function (e) {
      e.preventDefault(); // ページ遷移させない
      // ここでフォーム送信処理（ajaxなど）を行う
      // ↓テストとして即時表示
      $('.thanks-message').fadeIn();
      // オプション：フォームの入力欄を消す
      $(this).trigger("reset");
    });
  });
});