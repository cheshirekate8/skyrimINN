'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        user_id: 4,
        inn_id: 10,
        reservation_id: 1,
        rating: 5,
        comment: 'If you need a drink in Markath, it’s the Silver-Blood Inn you’re looking for! The mead is good, but the music is even better. Be sure to request a song from Ogmund - he’s the best bard in Markath'
      },
      {
        user_id: 5,
        inn_id: 10,
        reservation_id: 2,
        rating: 1,
        comment: 'Hands down, this Inn was the worst part of my time in Markath, and I got thrown in prison, so that’s really saying something. After hearing the Inn was owned by the wealthy Silver Blood family, I expected the best. But the obnoxious owners would not stop arguing - they seem to be husband and wife, and they bickered my entire stay. When I asked for the best suite, they refused to rent it to me, as the room was currently taken by a woman I know to be dead. Would not recommend it'
      },
      {
        user_id: 6,
        inn_id: 10,
        reservation_id: 3,
        rating: 4,
        comment: 'Silver-Blood inn is a good place for a drink and a murder investigation, but be sure to avoid Cosnach. He’s a regular, usually drinking at the bar… and if you so much as speak to the guy, he’ll fight you. That damn brawl cost me 100 coin.'
      },
      {
        user_id: 7,
        inn_id: 7,
        reservation_id: 4,
        rating: 3,
        comment: 'As the only Tavern in Raven Rock and the only Inn in Solthsteim, I didn’t expect much from The Retching Netch, but the barrels of tomatoes and carrots were surprisingly easy to steal. Rooms were an affordable 10 coin, and the blacksmith across the way barely kept me up at all.'
      },
      {
        user_id: 8,
        inn_id: 7,
        reservation_id: 5,
        rating: 5,
        comment: "They serve the best Sujamma I've ever tasted over at the Retching Netch. Worth every coin."
      },
      {
        user_id: 9,
        inn_id: 7,
        reservation_id: 6,
        rating: 4,
        comment: "The owner Geldis told me the inn was named after an amusing incident he witnessed. A drunk man was stumbling near the docks. As a netch approached him, he threw his bottle of sujamma at it. The bottle smashed on the back of the netch and it became intoxicated before vomiting."
      },
      {
        user_id: 10,
        inn_id: 12,
        reservation_id: 7,
        rating: 4,
        comment: "Be sure not to miss Talen-Jei’s exclusive cocktails. My favorite was the Velvet LeChance, a blackberry and honey spiced wine, but I loved the creamy lavender taste of the White-Gold Tower too. Best drinks in all of Riften! Though the Cliff Racer, which is Firebrand Wine, Cyrodiilic Brandy, Flin and Sujamma, didn’t get me drunk at all. "
      },
      {
        user_id: 11,
        inn_id: 12,
        reservation_id: 8,
        rating: 5,
        comment: "If you’re looking for a bed, talk to Keerava… and if you’re looking to bed, buy Haelga a drink… She’s a follower of Diabella and owner of the nearby bunkhouse… but be careful where you let her stick that horker tusk. "
      },
      {
        user_id: 12,
        inn_id: 12,
        reservation_id: 9,
        rating: 5,
        comment: "If you hate music, The Bee and Barb is the perfect place for you. It’s the only tavern in a major city in Skyrim without a bard droning on at all hours of the morning. You may run into Louis Letrush, who is supposedly a bard, but don’t fret - there’s not a song or musical instrument in sight."
      },
      {
        user_id: 13,
        inn_id: 2,
        reservation_id: 10,
        rating: 4,
        comment: "Located just inside the gates of Windhelm, this Inn is a place of warmth, comfort, and security, where all the troubles of the outside world are drowned away by cold mead. Be sure to try the Boiled Creme Treats - the cook Nils is the best in windhelm!"
      },
      {
        user_id: 14,
        inn_id: 2,
        reservation_id: 11,
        rating: 1,
        comment: "If you’re a Dunmar, be sure to avoid this place. Apparently Elda Early-Dawn is friendly enough, except with our kind. Her disdain was evident when I asked to rent a room, and the waitress informed me that Elda hates dark elves, despite knowing so little about us. Needless to say, I found other lodgings… paid for with a little something from Elda’s strongbox."},
      {
        user_id: 15,
        inn_id: 2,
        reservation_id: 12,
        rating: 4,
        comment: "Love the story behind Candlehearth Hall! The sweet old owner Elda told me the building was once home to a great warrior named Vundheim. After his death, his son lit a candle above the hearth to honor him, and since that day, the candle has never gone out! Must be some special wax?"
      },
      {
        user_id: 16,
        inn_id: 16,
        reservation_id: 13,
        rating: 4,
        comment: "I recommend requesting Mikael’s rendition of Ragnar the Red, as the song pairs nicely with a Sweet Roll and a tankard of mead. I also recommend brawling Mikael if he makes unwanted advances at any woman, as violence pairs nicely with a Sweet Roll and a tankard of mead. "
      },
      {
        user_id: 17,
        inn_id: 16,
        reservation_id: 14,
        rating: 1,
        comment: "Do NOT engage in a drinking contest with Sam Guevenne. I’ve no idea what he put in my cup, but after just a few rounds, I’d completely blacked out. The next thing I knew, I was woke up in the Temple of Dibella in Markarth."
      },
      {
        user_id: 18,
        inn_id: 16,
        reservation_id: 15,
        rating: 5,
        comment: "I sold some firewood I’d been lugging around to Hulda, the owner, and she gave me free room for life. I assumed she’d just stuff me in some small servant’s room, but no! The main bedroom! No charge! "
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
