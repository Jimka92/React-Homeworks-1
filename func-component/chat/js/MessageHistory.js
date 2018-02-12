'use strict';

function MessageHistory(props) {
    if (!Array.isArray(props.list) || props.list.length < 1) return;

    const messages = props.list.map(function (message) {
        //Определим компонент в зависимости от message.type
        let UsedComponent;
        switch (message.type){
            case 'message':
                UsedComponent = Message;
                break;
            case 'response':
                UsedComponent = Response;
                break;
            case 'typing':
                UsedComponent = Typing;
                break;
            default:
                return null;
        }
        return(
            <UsedComponent
                key={message.id}
                from={message.from}
                message={{
                    text: message.text,
                    time: message.time,
                    id: message.id
                }}
            />
        );
    });
    return(
        <ul>
            {messages}
        </ul>
    );
}