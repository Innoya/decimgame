$(document).ready(function() {
    let story_1 =
        "<div class='story_senario'><p>Just as the dusk is about to vanish and be replaced by a windy and wet night, a boy in a blue shirt waves goodbye to a girl in a navy dress. The girl gleefully announces that she will see him later to which the boy agrees. The two wave tooeach other and the girl enters her house. His eyes flutter open and a man is awakened by someone, who asks if he sleeps well. The man rubs his eyes and the man where he is. He is directed to the bar and told that things will be explainedthere. The man heads over to the bar, where a girl with blonde hair and a pink overalls awaits. Taking his seat near here, they appear to be strangers, they both greet each other with caution. The man stutters and is taken aback by hersheer beauty. The two at the bar decide to ask the man some questions</p><div class='senario_action'><button story-part='1' class='next'>What is your name and where are we?</button><button story-part='1' class='exit'>Leave</button></div><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_1_end =
        "<div class='story_senario'><p>The man and the woman get up and try leave. They frantically search for an exit but too no avail.</p><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_2 =
        "<div class='story_senario'><p>Just as the dusk is about to vanish and be replaced by a windy and wet night, a boy in a blue shirt waves goodbye to a girl in a navy dress. The girl gleefully announces that she will see him later to which the boy agrees. The two wavetooeach other and the girl enters her house. His eyes flutter open and a man is awakened by someone, who asks if he sleeps well. The man rubs his eyes and the man where he is. He is directed to the bar and told that things will beexplainedthere. The man heads over to the bar, where a girl with blonde hair and a pink overalls awaits. Taking his seat near here, they appear to be strangers, they both greet each other with caution. The man stutters and is takenaback by hersheer beauty. The two at the bar decide to ask the man some questions</p><p>Kuroko now explains the situation that they are in;</p><ol><li>He is unable to tell them where they are</li><li>The two of them will play a game</li><li>The two still stake their lives on this game</li><li>They cannot leave until the game is over</li></ol><p>The man now asks the girl if she can remember her name, she gets nervous and scared as she cannot even remember that, she then turns to the man and asks him his name which is Goku as he can remember that and not much else. Back at thebar, Kuroko tells her that if she were to play the game, her memories would more than likely return. Goku is very skeptical but the young lady speaks up. She goes on too say that because she has not been able to remember anything,she wants too take the chance but wishes to know if Goku will go along with it. After a few seconds of deliberation he decides too</p><div class='senario_action'><button story-part='2' class='next'>Help her out</button><button story-part='2' class='exit'>Say no</button></div><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_2_end =
        "<div class='story_senario'><h1>Game Over</h1><p>Goku says no, the young lady is very disappointed.</p><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";

    let story_3 =
        "<div class='story_senario'><p>He decides too help her out, she gives him a warm smile and thanks him. Seeing that the two have decided too play the game. Kuroko presses a button and a large screen slowly comes down and shows that the game they will be playing is Bowling.When the game is decided, the longue of XV explodes into smoke and is illuminated by a golden light, once everything has settled and the smoke has cleared, a bowling alley is revealed. Goku and the women are taken aback by this spectacle.</p><p>Kuroko explains the rules to the man and the women;</p><ol><li>It is exactly like traditional 10 pin bowling</li><li>Each turn will last one throw instead of two</li><li>They will take turns until the game is over</li><li>They must play with special balls containing their ‘hearts’ inside of them</li><li>They will bowl using each-others ‘heart balls’</li></ol><p>Kuroko then declares that the game has begun</p><p>Goku takes hold of an orange bowling ball, but he is shocked and freaked out by the ‘heartbeat’ of the ball. Kuroko lets them know that the balls correspond to their heart rate, but it will not be painful. He also mentions that the balls arethe same temperature as their bodies. Concerned, the woman asks if they can use any other ball. Kuroko bluntly states that they must follow the rules</p><p>Goku resumes bowling and places his hand in the holes of his ball. He notices that the woman’s heart is beating quickly and she might be nervous. He feels how nice and warm her heart is as his face becomes red. Snapping himself out of thisand how shocked he is at his behavior, he decides to bowl and knocks down 8 pins on his first go.</p><p>The woman then goes to take her turn and is startled by the ‘hearbeat’, as Goku sees this he tries to slowdown his heartbeat. After a few seconds, the girl wonders if Shigeru is nervous, but brushes it off as normal considering the situationthey are in. She releases the ball, and knocks down 5 pins.</p><p>Shigeru thinks about complimenting her by saying her form is good.</p><div class='senario_action'><button story-part='3' class='next'>Compliment her on her form</button><button story-part='3' class='exit'>Don’t compliment her</button></div><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_3_end =
        "<div class='story_senario'><h1>Game Over</h1><p><b>You have reached one of the endings</b></p><p>Goku decides not to compliment her form and decides to go for the same form he bowled last time and ends up bowling another 8. Goku and the girl take turns in bowling and are just doing it monotonously with barely any enjoyment visible fromtheir faces and expressions. The game ends 94 for Goku and 78 for the girl. Kuroko tells the two about their past and how this whole situation happened. The two of them part ways and enter separate elevators and leave XV.</p><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";

    let story_4 =
        "<div class='story_senario'><p>Goku decides to compliment her form, the girl thanks him and brushes some hair out of her face. This causes the light to catch the strands, and this reminds him of a young girl waving goodbye to him in the wet and windy night. Taken aback,Shigeru thinks that the girl he used to play with could be the women he is with now. He brushes this thought off and tries to bowl, however his mind is preoccupied and he ends up bowling a gutter ball. The girl encourages him for nexttime. Kuroko happily observers from the sidelines that this friendly game has not resorted to any kind of violence. Goku and the girl take turns bowling and are having fun, encouraging and celebrating each other whenever one does wellor poorly. In the 6th frame, the scores are 40-33 to the girl, from seeing this, she says to Goku that if she wins than will he go out with her. Goku has two options in his mind during this, to let her win so he can go out with her, orto win and show his skills in bowling on full display.</p><div class='senario_action'><button story-part='4' class='next'>Let her win</button><button story-part='4' class='exit'>Win for yourself</button></div><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_4_end =
        "<div class='story_senario'><p>Kuroko groans to himself as he feels bad for the two players as they are unaware that they are dead. Shifting back, the girls realizes that her heart is beating quickly, as is Goku’s but he isn’t bothered by it. In fact, it feels nostalgic,familiar and delightful. Rolling her ball, she recalls a memory in which she is working at a bowling alley and spots Goku with his friends. She rolls a strike and Goku compliments her, she is disappointed that she cant remember anythingelse, but at least she apparently knew Goku. Goku takes his turn, then she bowls again. As she throws her ball getting another strike, she remembers another memory. It is of a girl saying goodbye to Goku as children and Goku respondinggoodbye to ‘Sakura’. Goku is impressed that she gets another strike. The girl spins round and happy announces that she’s Sakura, his old friend who used to play in the park with him. Overjoyed, he leaps off the couch and embraces her hands,remembering who she is and that she moved away.</p><p>Still behind the counter, Kuroko thinks to himself that it really begins now, and that the information may cause the two of them to not be on such good terms by the end, but they will make judgements depending on how they react. </p><p>Staring down the lane as he is about to take his final throw, Goku recalls the conversation he just had with Sakura. For his last shot, he’ll make sure to get a strike so she cant win. With the date in the back of his mind, he decides to embracehis manly roots and wants too get a strike. Goku gets the strike and celebrates by himself too Sakuras disappointment. Kuroko announces that the game has concluded and that Goku has won. After everything has been explained to the two ofthem by Kuroko, they are both shocked and depressed too find out they are both dead and part ways without talking to each other again. </p><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_5 =
        "<div class='story_senario'><p>Kuroko groans to himself as he feels bad for the two players as they are unaware that they are dead. Shifting back, the girls realizes that her heart is beating quickly, as is Goku’s but he isn’t bothered by it. In fact, it feels nostalgic,familiar and delightful. Rolling her ball, she recalls a memory in which she is working at a bowling alley and spots Goku with his friends. She rolls a strike and Goku compliments her, she is disappointed that she cant remember anythingelse, but at least she apparently knew Goku. Goku takes his turn, then she bowls again. As she throws her ball getting another strike, she remembers another memory. It is of a girl saying goodbye to Goku as children and Goku respondinggoodbye to ‘Sakura’. Goku is impressed that she gets another strike. The girl spins round and happy announces that she’s Sakura, his old friend who used to play in the park with him. Overjoyed, he leaps off the couch and embraces her hands,remembering who she is and that she moved away.</p><p>Still behind the counter, Kuroko thinks to himself that it really begins now, and that the information may cause the two of them to not be on such good terms by the end, but they will make judgements depending on how they react. </p><p>Staring down the lane as he is about to take his final throw, Goku recalls the conversation he just had with Sakura. For his last shot, he’ll throw a gutter ball meaning that she will only have to knock down 3 pins to win and secure theirdate. Lining up and releasing to throw the gutter ball, he has another flashback to when he was at the bowling alley with his friends. Shigeru is telling his friends that he wants to see a cute girl he likes, he points her out (Sakura).His friends reveal a secret about her and he is extremely shocked by what they tell him. Later he spots Sakura on the way back from college on the bus home and approaches her. He speaks a few words, but she is unable to respond because the bus collides with a tree resulting in their death. </p><p>After hitting the gutter ball, Goku falls to the ground, crushed by what he remembers. Knowing that they are dead he decides too stay on the ground. Sakura decides to check on him. Goku puts on a brave face and declares that everything is okay. She proceeds too get an 8 on her last shot, but notices his heart is beating out of control. As she is walking back, she has more flashbacks in quick succession. An operating room ceiling, a view of the countryside, checking her face in the bus window and Goku approaching her. She also remembers that her real name is Horimiya, the other friend and not Sakura who moved away. </p><p>Kuroko announces that the game has concluded and Horimiya has won, she is congratulated, however while this is happening, Goku is still on the floor slumped over. He asks if they are already dead. Affirming this, Kuroko starts to give his speech about Heaven and Hell, however he is interrupted by Kuroko who says he doesn’t need to waste his breath and he already knows the situation. </p><p>Kuroko approaches Horimiya and…</p><div class='senario_action'><button story-part='5' class='next'>Asks why she got plastic surgery</button><button story-part='5' class='exit'>Asks her out</button></div><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_5_end =
        "<div class='story_senario'><h1>Game Over / Play again</h1><p>she tries too explain, before she can say anything he asks her out, saying this is his only chances because they are both dead. He states he wants to be with her until their last moments. She accepts tearfully and happily as Kuroko watches on, seemingly interested.</p><p>Turning they ask Kuroko if they would be allowed to have some time together before they leave, he agrees and lets them have as long as they need.</p><p>After they are done, they walk together too the elevators holding hands. Goku exclaims to her how much fun he had and she says the same. Goku and Horimiya give their last goodbyes to Kuroko and get into the same elevator.</p><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";
    let story_end =
        "  <div class='story_senario'><h1>Game Over</h1><p>bluntly asks her why she got plastic surgery. Horimiya choking back on her tears starts too explain as that her, Goku and Sakura would play as kids but stopped when Sakura moved away. She recalls how she always loved Goku, even confessing to him as a kid. Throughout high school she felt like she never caught his eye. She then tells him that she got it too finally by noticed by Goku. She mistakenly believed she was Sakura because she had plastic surgery too look like her and got confused by her own memories.</p><p>Taken aback by this, Goku decides too not ask her any more and doesn’t attempt to comfort her and simply asks Kuroko can he go. He tells Goku where to go and without saying goodbye he gets into the elevator and leaves.</p><div class='story_action'><button id='mute'><i class='fa fa-bell fa-bell-slash' ></i></button><button id='replay'><i class='fa fa-repeat' ></i></button><button id='exit'><i class='fa fa-remove' ></i></button></div></div>";

    /*************************************************************************/
    start_story();

    function start_story() {
        let story_container = $(".story_container");
        let start_page =
            "<div class='start_page'><h1>Main Menu</h1><h3>Decim</h3><h5>Tom Webb-Jones</h5><button id='start_btn'>Start</button></div>";
        story_container.html(start_page);
        let start_btn = $("#start_btn");

        start_btn.click(function() {
            let next_story;
            let exit_story;
            let mute_audio;
            var audio;

            function createStory(story, audio_path) {
                audio = new Audio(audio_path);
                audio.muted = false;
                audio.play();

                story_container.html(story);
                next_story = $(".next");
                exit_story = $(".exit");
                mute_audio = $("#mute");

                // Mute Audio
                mute_audio.click(function() {
                    $(this).children('i').toggleClass('fa-bell-slash');
                    if (audio.muted == false) {
                        audio.muted = true;
                    } else if (audio.muted == true) {
                        audio.muted = false;
                    }
                });

                // Next Story
                next_story.click(function() {
                    audio.pause();
                    let story_num = $(this).attr("story-part");
                    if (story_num == 1) {
                        createStory(story_2, "assets/audio/audio2.mp3");
                    } else if (story_num == 2) {
                        createStory(story_3, "assets/audio/audio.mp3");
                    } else if (story_num == 3) {
                        createStory(story_4, "assets/audio/audio2.mp3");
                    } else if (story_num == 4) {
                        createStory(story_5, "assets/audio/audio.mp3");
                    } else if (story_num == 5) {
                        createStory(story_end, "assets/audio/audio2.mp3");
                    }
                });
                // End Story
                exit_story.click(function() {
                    audio.pause();
                    let story_num = $(this).attr("story-part");
                    if (story_num == 1) {
                        createStory(story_1_end, "assets/audio/audio3.mp3");
                    } else if (story_num == 2) {
                        createStory(story_2_end, "assets/audio/audio3.mp3");
                    } else if (story_num == 3) {
                        createStory(story_3_end, "assets/audio/audio3.mp3");
                    } else if (story_num == 4) {
                        createStory(story_4_end, "assets/audio/audio3.mp3");
                    } else if (story_num == 5) {
                        createStory(story_5_end, "assets/audio/audio3.mp3");
                    }
                });
                // Re-start button
                $("#replay").click(function() {
                    audio.pause();

                    createStory(story_1, "assets/audio/audio4.mp3");
                });
                // Exit Game
                $("#exit").click(function() {
                    audio.pause();

                    start_story();
                });
            }
            createStory(story_1, "assets/audio/audio4.mp3");
        });
    }
});