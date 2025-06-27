$(document).ready(function () {
  // 鍵盤クリックでアコーディオン開く＋スクロール
  $('.piano-key a').on('click', function (e) {
    e.preventDefault();
    const targetId = $(this).attr('href').replace('#', '');
    const $target = $('#' + targetId);

    $('.accordion-item').removeClass('active');
    $target.addClass('active');

    $('html, body').animate({
      scrollTop: $target.offset().top - 80
    }, 500);
  });

  // ヘッダーのmenuクリックで全部閉じる
  $('#header-navi a[href="#menu"]').on('click', function () {
    $('.accordion-item').removeClass('active');
  });
});

  // slick初期化
  if ($('.slide-items').length) {
    $('.slide-items').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      arrows: false,  // 矢印を非表示にしたいならここを false に
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '40px',
          }
        }
      ]
    });
  }


  $(document).ready(function() {
  $('.student a').on('click', function(e) {
    e.preventDefault();
    const password = prompt('パスワードを入力してください');
    if (password === 'silasofamiredo') {
      window.location.href = 'files/student-file.pdf';
    } else if (password !== null) {
      alert('パスワードが違います。');
    }
  });
});


$(document).ready(function() {
  $('.preview-btn').on('click', function() {
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
  $('.close-preview-btn').on('click', function() {
    $('.preview-box').slideUp();
  });
});

$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault(); // ページ遷移させない
    // ここでフォーム送信処理（ajaxなど）を行う
    // ↓テストとして即時表示
    $('.thanks-message').fadeIn();
    // オプション：フォームの入力欄を消す
    $(this).trigger("reset");
  });
});
