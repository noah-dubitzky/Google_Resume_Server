from telethon import TelegramClient, events
import os
from datetime import datetime
import re

api_id = 25991850
api_hash = 'c25af5fa735f66238cea009a2fb81826'

#api_id = 20349481
#api_hash = '2f4e1f6938e13859b0beec42b9a936d7'

client = TelegramClient('anon', api_id, api_hash)
#802062@@@

@client.on(events.NewMessage)
async def my_event_handler(event):

    now = datetime.now()

    current_time = now.strftime("%H-%M-%S")

    message = event.message
      
    path = await message.download_media()

    #user = await client.get_entity(message.sender_id)
    user = await message.get_sender()

    location_media = "Private_Photos"
    location_convos = "Private_Convos"

    if message.chat_id < 0 or str(user.__class__) == "<class 'telethon.tl.types.Channel'>":
        location_media = "Channel_Photos"
        location_convos = "Channel_Convos"
        user = await client.get_entity(message.chat_id)
        userName = user.title
        print(userName)
    else:
        userName = user.first_name

    image_name = location_media + "/" + re.sub('[!@#$\/:]', '', userName)
    image_name = image_name + "_" + str(path)   

    if message.photo:

        os.rename(path, image_name)
        print('File saved to', image_name)

    elif message.gif:

        os.rename(path, image_name)
        print('File saved to', image_name)

    elif message.video:

        os.rename(path, image_name)
        print('File saved to', image_name)

    else:
        newLine = str(message.sender_id)+':'+message.text + '\n'
        print(newLine)

        fileName = location_convos + "/" + re.sub('[!@#$\/:]', '', userName) + ".txt"

        file = open(fileName, "a+", encoding="utf-8")
        file.write(newLine)
        file.close()

print("attempting to connect")

client.start()
client.run_until_disconnected()
