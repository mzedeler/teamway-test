#!/usr/bin/node

import { JSDOM, ResourceLoader, VirtualConsole } from 'jsdom'
import fs from 'fs'

async function main() {
  const virtualConsole = new VirtualConsole()
  virtualConsole.sendTo(console)
  const resources = new ResourceLoader()
  const url = 'https://www.psychologies.co.uk/test/are-you-an-introvert-or-an-extrovert/'

  const dom = await JSDOM.fromURL(url, { resources, virtualConsole })
  
  const questionNodes = dom.window.document.querySelectorAll('.c-test__question')

  const extractAnswer = answerNode => ({
    index: answerNode.querySelector('.c-test__answer-index').textContent.trim(),
    text: answerNode.querySelector('.c-test__answer-text').textContent.trim(),
  })

  const extractQuestion = questionNode => ({
    id: questionNode.id,
    question: questionNode.querySelector('.c-test__question-text').textContent.trim(),
    answers: Array.from(questionNode.querySelectorAll('.c-test__answer')).map(extractAnswer)
  })

  const questions = Array.from(questionNodes).map(extractQuestion)
  fs.writeFileSync('questions.json', JSON.stringify(questions, null, 2))
}

main()
