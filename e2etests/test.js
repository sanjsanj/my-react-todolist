/* global describe, it, browser, beforeEach */

const expect = require('chai').expect;

describe('TodoList App', () => {
  const todoText = 'Get better at testing';

  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delete a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    browser.click('.todo-undelete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('success');
  });

  it('Should disable the Add Todo button when no text is entered', () => {
    expect(browser.isEnabled('.todo-submit')).to.equal(false);
  });

  it('Should enable the Add Todo button when text is entered', () => {
    browser.element('.todo-input').setValue(todoText);
    expect(browser.isEnabled('.todo-submit')).to.equal(true);
  });

  it('Should disable the Undelete button when there is no deleted todo', () => {
    expect(browser.isEnabled('.todo-undelete')).to.equal(false);
  });

  it('Should enable the Undelete button when there is a deleted todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    expect(browser.isEnabled('.todo-undelete')).to.equal(true);
  });
});
