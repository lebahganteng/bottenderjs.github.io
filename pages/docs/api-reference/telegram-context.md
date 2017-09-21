# TelegramContext

## platform

The name of the platform.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## client

The client instance.

Returns **TelegramClient** 

## event

The event instance.

Returns **TelegramEvent** 

## session

The session state of the context.

Returns **TelegramSession?** 

## setMessageDelay

Set delay before sending every messages.

**Parameters**

-   `milliseconds` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **void** 

## typing

Delay and show indicators for milliseconds.

**Parameters**

-   `milliseconds` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** 

## sendText

Send text to the owner of then session.

**Parameters**

-   `text` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>** 

## rawEvent

Underlying raw event from Telegram.

Returns **TelegramRawEvent** 

## isMessage

Determine if the event is a message event.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## message

The message object from Telegram raw event.

Returns **Message?** 

## isTextMessage

Determine if the event is a message event which includes text.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isAudioMessage

Determine if the event is a message event which includes audio.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isDocumentMessage

Determine if the event is a message event which includes document.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isGameMessage

Determine if the event is a message event which includes game.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isPhotoMessage

Determine if the event is a message event which includes photo.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isStickerMessage

Determine if the event is a message event which includes sticker.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isVideoMessage

Determine if the event is a message event which includes video.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isVoiceMessage

Determine if the event is a message event which includes voice.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isVideoNoteMessage

Determine if the event is a message event which includes video note.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isContactMessage

Determine if the event is a message event which includes contact.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isLocationMessage

Determine if the event is a message event which includes location.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isVenueMessage

Determine if the event is a message event which includes venue.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isCallbackQuery

Determine if the event is a callback query event.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 