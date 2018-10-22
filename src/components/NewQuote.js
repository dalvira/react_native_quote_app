import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInputCustom from './common/TextInputCustom';
import ButtonCustom from './common/ButtonCustom';
import SpinnerCustom from './common/SpinnerCustom';

const NewQuote = ({
  navigation,
  quoteNew,
  paraNew,
  pageNew,
  titleNew,
  authorNew,
  noteNew,
  loadingSave,
  errorSave,
  onChangeQuote,
  onChangePara,
  onChangePage,
  onChangeTitle,
  onChangeAuthor,
  onChangeNote,
  onPressSaveQuote
}) => {
  const {
    container,
    header,
    cancelButtonContainer,
    cancelButton,
    titleContainer,
    title,
    body,
    textInputContainer,
    quoteContainer,
    numsContainer,
    paraNumContainer,
    pageNumContainer,
    personalNoteContainer,
    buttonsContainer,
    saveButtonContainer,
    bookTitleContainer,
    authorContainer,
    footer,
    errorStyle
  } = styles;

  handleOnPressCancelNewQuote = () => {
    navigation.goBack();
  };

  handleQuote = text => {
    onChangeQuote(text);
  };

  handlePara = text => {
    onChangePara(text);
  };

  handlePage = text => {
    onChangePage(text);
  };

  handleTitle = text => {
    onChangeTitle(text);
  };

  handleAuthor = text => {
    onChangeAuthor(text);
  };

  handleNote = text => {
    onChangeNote(text);
  };

  handleOnPressSaveQuote = () => {
    onPressSaveQuote(
      navigation,
      quoteNew,
      paraNew,
      pageNew,
      titleNew,
      authorNew,
      noteNew
    );
  };

  renderSpinner = () => {
    if (loadingSave) {
      return <SpinnerCustom size="large" color="#FFFFFF" />;
    }
  };

  renderError = () => {
    if (errorSave) {
      return (
        <View>
          <Text style={errorStyle}>{errorSave}</Text>
        </View>
      );
    }
  };

  return (
    <View style={container}>
      <View style={header}>
        <View style={cancelButtonContainer}>
          <Icon.Button
            style={cancelButton}
            name="cancel"
            size={20}
            backgroundColor="#0094C8"
            underlayColor="white"
            onPress={this.handleOnPressCancelNewQuote}
          />
        </View>
        <View style={titleContainer}>
          <Text style={title}>New Quote</Text>
        </View>
      </View>
      <View style={body}>
        <View style={textInputContainer}>
          <View style={quoteContainer}>
            <TextInputCustom
              label={'QUOTE'}
              placeholder={
                '"We must learn what customers really want, not what they say they want or what we think they should want"'
              }
              onChangeText={this.handleQuote}
              placeholderTextColor="#D9DBDB"
              multiline={true}
            />
          </View>
          <View style={numsContainer}>
            <View style={paraNumContainer}>
              <TextInputCustom
                label={'PARA NO.'}
                placeholder={'3'}
                onChangeText={this.handlePara}
                placeholderTextColor="#D9DBDB"
                keyboardType="numeric"
              />
            </View>
            <View style={pageNumContainer}>
              <TextInputCustom
                label={'PAGE NO.'}
                placeholder={'237'}
                onChangeText={this.handlePage}
                placeholderTextColor="#D9DBDB"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={bookTitleContainer}>
            <TextInputCustom
              label={'TITLE'}
              placeholder={'The Lean Startup'}
              onChangeText={this.handleTitle}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={authorContainer}>
            <TextInputCustom
              label={'AUTHOR'}
              placeholder={'Eric Ries'}
              onChangeText={this.handleAuthor}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={personalNoteContainer}>
            <TextInputCustom
              label={'PERSONAL NOTE'}
              placeholder={
                'Observe how customers use the product to uncover needed funtionalities.'
              }
              onChangeText={this.handleNote}
              placeholderTextColor="#D9DBDB"
              multiline={true}
            />
          </View>
        </View>
        <View style={buttonsContainer}>
          <View style={saveButtonContainer}>
            <ButtonCustom
              label="SAVE"
              onPress={() => handleOnPressSaveQuote()}
            />
          </View>
        </View>
      </View>
      <View style={footer}>
        {this.renderSpinner()}
        {this.renderError()}
      </View>
    </View>
  );
};

NewQuote.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0094C8',
    alignItems: 'center'
  },
  header: { flex: 1, paddingTop: 20, flexDirection: 'row', paddingBottom: 20 },
  cancelButtonContainer: { justifyContent: 'center', marginLeft: 10 },
  cancelButton: {
    shadowOffset: { width: 1, height: 3 },
    shadowColor: '#000000',
    shadowOpacity: 0.2
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 35
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F6F8FA'
  },
  body: { flex: 10, alignSelf: 'stretch' },
  textInputContainer: { flex: 3 },
  quoteContainer: { flex: 1 },
  numsContainer: { flex: 1, flexDirection: 'row' },
  paraNumContainer: { flex: 1 },
  pageNumContainer: { flex: 1 },
  bookTitleContainer: { flex: 1 },
  authorContainer: { flex: 1 },
  personalNoteContainer: { flex: 1 },
  buttonsContainer: { flex: 1, paddingTop: 10 },
  saveButtonContainer: { flex: 1 },
  footer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorStyle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  }
});

export default NewQuote;
