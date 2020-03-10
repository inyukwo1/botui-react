import React from 'react';
import 'botui/build/botui.js';
import 'botui/build/botui.min.css';
import 'botui/build/botui-theme-default.css';

class Botui extends React.Component {
  message = {
    add(message) {
      return this.botui.message.add(message);
    },
    bot(message) {
      return this.botui.message.bot(message);
    },
    insert_with_button(index, message) {
      return this.botui.message.insert_with_button(index, message);
    },
    insert_with_checkbox_table(index, message) {
      return this.botui.message.insert_with_checkbox_table(index, message);
    },
    human(message) {
      return this.botui.message.human(message);
    },
    get(index) {
      return this.botui.message.get(index);
    },
    update(index, message) {
      return this.botui.message.update(index, message);
    },
    insert(index, message) {
      return this.botui.message.insert(index, message);
    },
    remove(index) {
      return this.botui.message.remove(index);
    },
    removeAll() {
      return this.botui.message.removeAll();
    },
    getMessageLengthCorrectPair() {
      return this.botui.message.getMessageLengthCorrectPair();
    },
    enableIncorrectClick(callback) {
      return this.botui.message.enableIncorrectClick(callback);
    },
    disableIncorrectClick() {
      return this.botui.message.disableIncorrectClick();
    },
  };

  action = {
    show(action) {
      if (action.type === 'button') {
        return this.botui.action.button(action);
      }
      if (action.type === 'text') {
        return this.botui.action.text(action);
      }
      return this.botui.action.show(action);
    },
    hide() {
      return this.botui.action.hide();
    },
    text(action) {
      return this.botui.action.text(action);
    },
    button(action) {
      return this.botui.action.button(action);
    },
    select(action) {
      return this.botui.action.select(action);
    },
  };

  componentDidMount() {
    const BotUI = window.BotUI;
    this.botui = new BotUI('react-botui');
    this.message.add = this.message.add.bind(this);
    this.message.bot = this.message.bot.bind(this);
    this.message.insert_with_button = this.message.insert_with_button.bind(
      this
    );
    this.message.insert_with_checkbox_table = this.message.insert_with_checkbox_table.bind(
      this
    );
    this.message.human = this.message.human.bind(this);
    this.message.get = this.message.get.bind(this);
    this.message.update = this.message.update.bind(this);
    this.message.remove = this.message.remove.bind(this);
    this.message.removeAll = this.message.removeAll.bind(this);
    this.message.insert = this.message.insert.bind(this);
    this.message.getMessageLengthCorrectPair = this.message.getMessageLengthCorrectPair.bind(
      this
    );
    this.message.enableIncorrectClick = this.message.enableIncorrectClick.bind(
      this
    );
    this.message.disableIncorrectClick = this.message.disableIncorrectClick.bind(
      this
    );
    this.action.hide = this.action.hide.bind(this);
    this.action.show = this.action.show.bind(this);
    this.action.text = this.action.text.bind(this);
    this.action.button = this.action.button.bind(this);
    this.action.select = this.action.select.bind(this);
  }

  render() {
    return (
      <div
        className="botui-app-container"
        id="react-botui"
        style={this.props.style}
      >
        <bot-ui>Bot</bot-ui>
      </div>
    );
  }
}

export default Botui;
