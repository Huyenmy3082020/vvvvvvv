/**
 * CHỈNH SỬA TẠI ĐÂY để cá nhân hoá toàn bộ món quà.
 * Ảnh mẫu dùng Unsplash; hãy thay các URL bằng ảnh của hai bạn khi sẵn sàng.
 */
export const birthdayConfig = {
  recipientName: "Người đặc biệt",
  birthday: "2004-10-20",
  age: 22,
  mainMessage: "Hôm nay là ngày mà một người rất đặc biệt xuất hiện trên thế giới.",
  heroImage:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=88",
  music: {
    title: "Little birthday lullaby",
    artist: "a tiny gift for you"
  },
  letter: [
    "Hôm nay là sinh nhật của bạn.",
    "Mình không biết nên viết điều gì thật hoàn hảo, nhưng mình mong rằng tuổi mới sẽ mang đến cho bạn thật nhiều niềm vui, sức khoẻ và những điều mà bạn mong muốn.",
    "Cảm ơn vì đã xuất hiện và trở thành một phần rất đặc biệt trong cuộc sống của những người xung quanh. Mong rằng những ngày phía trước, dù có vui hay buồn, bạn vẫn luôn giữ được nụ cười của mình."
  ],
  memories: [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
      caption: "Ngày hôm đó, trời đẹp như một lời hẹn.",
      rotate: "-3deg"
    },
    {
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85",
      caption: "Một khoảnh khắc rất đáng nhớ ♥",
      rotate: "2deg"
    },
    {
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85",
      caption: "Ảnh này nhất định phải giữ lại 😆",
      rotate: "-1.5deg"
    },
    {
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      caption: "Một ngày bình thường, nhưng có bạn nên thật vui.",
      rotate: "3deg"
    }
  ],
  timeline: [
    { year: "2023", date: "một ngày thật tình cờ", title: "Lần đầu chúng ta gặp nhau", description: "Một câu chào rất nhỏ, rồi chẳng hiểu sao lại thành một kỷ niệm lớn." },
    { year: "2024", date: "những ngày rực rỡ", title: "Thêm nhiều chuyện để kể", description: "Có những lần cười thật lâu và những khoảnh khắc chỉ cần nhớ lại là thấy ấm lòng." },
    { year: "2025", date: "một chương mới", title: "Thêm một tuổi, thêm kỷ niệm", description: "Chúng ta vẫn đi qua từng ngày, góp nhặt thật nhiều điều xinh đẹp." },
    { year: "2026", date: "và hôm nay", title: "Một bữa tiệc dành cho bạn", description: "Để nhắc bạn rằng: bạn được yêu quý nhiều hơn bạn vẫn nghĩ." }
  ],
  specialThings: [
    "Nụ cười làm mọi thứ dịu dàng hơn",
    "Cách bạn quan tâm mọi người",
    "Sự cố gắng rất âm thầm mà bền bỉ",
    "Những lúc ngốc nghếch thật đáng yêu",
    "Một trái tim luôn rất chân thành",
    "Cách bạn làm căn phòng vui hơn",
    "Sự can đảm khi theo đuổi điều mình tin",
    "Những ước mơ thật đẹp",
    "Khả năng biến ngày thường thành kỷ niệm",
    "Vì bạn là chính bạn"
  ],
  messages: [
    "Bạn xứng đáng với tất cả những điều tốt đẹp nhất.",
    "Mong tuổi mới sẽ dịu dàng với bạn.",
    "Đừng quên rằng bạn tuyệt vời hơn bạn nghĩ rất nhiều.",
    "Đi thật chậm cũng được, miễn là mỗi ngày bạn đều thấy vui.",
    "Luôn vui vẻ nhé, vì nụ cười của bạn rất quý. ♥"
  ],
  wishes: [
    { icon: "♥", text: "Luôn vui vẻ" },
    { icon: "✦", text: "Gặp nhiều may mắn" },
    { icon: "₫", text: "Kiếm thật nhiều tiền" },
    { icon: "◌", text: "Đi thật nhiều nơi" },
    { icon: "◎", text: "Chạm tới điều mong muốn" },
    { icon: "☺", text: "Ít buồn hơn" },
    { icon: "♡", text: "Được yêu thương thật nhiều" }
  ]
} as const;

export type BirthdayConfig = typeof birthdayConfig;
