import { Page, Locator, expect } from '@playwright/test'

export default class TodoPage {
  // default = can be imported with any name

  readonly page: Page
  readonly input: Locator
  readonly toDoItems: Locator
  readonly filters: Locator
  readonly clearCompletedButton: Locator

  constructor(page: Page) {
    this.page = page
    this.input = page.locator('.new-todo')
    this.toDoItems = page.locator('.todo-list li')
    this.filters = page.locator('.filters li a')
    this.clearCompletedButton = page.locator('.destroy')
  }
  async open() {
    await this.page.goto('https://demo.playwright.dev/todomvc/')
  }

  async addToDo(text: string) {
    await this.input.fill(text)
    await this.input.press('Enter')
  }

  async toggleToDo(index: number) {
    await this.toDoItems.nth(index).locator('.toggle').click() // Toggle the checkbox of the to-do item at the specified index
  }

  async deleteToDo(index: number) {
    await this.toDoItems.nth(index).hover() // Hover over the to-do item to reveal the delete button
    await this.toDoItems.nth(index).locator('.destroy').click()
  }

  async filterToDos(filter: 'All' | 'Active' | 'Completed') {
    await this.page.getByRole('link', { name: filter }).click()
  }
  async assertToDoCount(count: number) {
    await expect(this.toDoItems).toHaveCount(count)
  }
}
