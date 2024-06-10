
export const sampleChats = [
    {
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Dow",
        _id: "1",
        groupChat:false,
         members: ["1", "2"],
        },
        {
            avatar:[
                "https://www.w3schools.com/howto/img_avatar.png",
              
            ],
            name: "John boi",
            _id: "2",
            groupChat:true,
             members: ["1", "2"],
            },

]



export const sampleUsers = [
    {
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Dow",
    _id: "1",
 
    },
    {
        avatar:[
            "https://www.w3schools.com/howto/img_avatar.png",
        ],
        name: "John boi",
        _id: "2",

        }
]

export const sampleNotifications = [
    {
        sender:{
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Dow",
        },
        _id: "1",
 
    },
    {
        sender:{
            avatar:[
                "https://www.w3schools.com/howto/img_avatar.png",
            ],
            name: "John boi",
        },      
        _id: "2",

        }
]

export const sampleMessage = [
    {
        attachments:[
         
        ],
        content: "lisdufi",
        _id: "sodfohewhenk",
        sender: {
            _id: "user-di",
            name: "chang"
        },
        chat: "chatId",
        createdAt:"2024-02-12T10:41:30.630Z"
    },
    {
        attachments:[
            {
                public_id: "asdfasdr",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            }
        ],
        content: "",
        _id: "dskfosjlk",
        sender: {
            _id: "dskfosjlk",
            name: "chang343"
        },
        chat: "chatId343e",
        createdAt:"2024-02-12T10:41:30.630Z"
    }
];

export const dashboardData = {
    users: [
        {
            name: "John Dow",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            username: "john_doe",
            friends: 20,
            groups: 5,
         
        },
        {
            name: "John Boi",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            username: "john_boi",
            friends: 25,
            groups: 2,
         
        },
    ],

    chats: [
        {
          name: "John Dow",
          avatar:["https://www.w3schools.com/howto/img_avatar.png"],
          _id: "1",
          groupChat:false,
          members: [
            {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
          ],
          totalMembers: 2,
          totalMessages: 20,
          creator: {
              name: "John Dow",
              avatar:["https://www.w3schools.com/howto/img_avatar.png"],
          }
         },
         {
          name: "Boyz group",
          avatar:["https://www.w3schools.com/howto/img_avatar.png"],
          _id: "2",
          groupChat:false,
          members: [
            {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
          ],
          totalMembers: 2,
          totalMessages: 20,
          creator: {
              name: "John Dow",
              avatar:["https://www.w3schools.com/howto/img_avatar.png"],
          }
         }
      ],

      messages:[
        {
            attachments: [
                {
                    public_id: "saflkk1",
                    url: "https://www.w3schools.com/howto/img_avatar.png"
                }
            ],
            content: "chu ka msg hai",
            _id: "sldhfojwej",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-02-12T10:41:30.630Z",
        },

        {
            attachments: [
                {
                    public_id: "saflkk2",
                    url: "https://www.w3schools.com/howto/img_avatar.png"
                }
            ],
            content: "chu ka msg hai",
            _id: "sldhfosgfge",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"naman",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-02-12T10:41:30.630Z",
        }
      ]
}

