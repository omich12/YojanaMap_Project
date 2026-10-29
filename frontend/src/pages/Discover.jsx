import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw
} from 'lucide-react'

import { discoveryQuestions } from '../data/discoveryQuestions'
import { careers } from '../data/careers'

import QuestionCard from '../components/discovery/QuestionCard'
import CareerCard from '../components/careers/CareerCard'

import { getCareerRecommendations } from '../utils/careerMatcher'


function Discover() {

  const [currentQuestion, setCurrentQuestion] =
    useState(0)


  const [answers, setAnswers] =
    useState({})


  const [showResults, setShowResults] =
    useState(false)


  const question =
    discoveryQuestions[currentQuestion]


  function selectAnswer(value) {

    setAnswers({
      ...answers,
      [question.key]: value,
    })
  }


  function nextQuestion() {

    if (
      currentQuestion <
      discoveryQuestions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      )

    } else {

      setShowResults(true)

    }
  }


  function previousQuestion() {

    if (currentQuestion > 0) {

      setCurrentQuestion(
        currentQuestion - 1
      )

    }
  }


  function restartDiscovery() {

    setCurrentQuestion(0)

    setAnswers({})

    setShowResults(false)
  }


  const recommendations =
    getCareerRecommendations(
      careers,
      answers
    )


  if (showResults) {

    return (
      <DiscoveryResults
        recommendations={recommendations}
        onRestart={restartDiscovery}
      />
    )
  }


  const progress =
    ((currentQuestion + 1) /
      discoveryQuestions.length) *
    100


  const hasAnswered =
    answers[question.key]


  return (
    <div className="min-h-[80vh] bg-[#F8FAF5]">

      <div className="mx-auto max-w-3xl px-6 py-16">


        {/* Heading */}
        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
            Career Discovery
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Let's find paths worth exploring
          </h1>

          <p className="mt-3 text-gray-600">
            Answer a few simple questions about your
            interests and preferences.
          </p>

        </div>


        {/* Progress */}
        <div>

          <div className="mb-2 flex justify-between text-sm">

            <span className="text-gray-500">
              Question {currentQuestion + 1} of{' '}
              {discoveryQuestions.length}
            </span>

            <span className="font-medium text-[#3D5A1E]">
              {Math.round(progress)}%
            </span>

          </div>


          <div className="h-2 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-[#6B9A38] transition-all"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

        </div>


        {/* Question */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">

          <QuestionCard
            question={question}
            selectedAnswer={
              answers[question.key]
            }
            onSelect={selectAnswer}
          />


          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">

            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={17} />
              Back
            </button>


            <button
              onClick={nextQuestion}
              disabled={!hasAnswered}
              className="inline-flex items-center gap-2 rounded-lg bg-[#3D5A1E] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6B9A38] disabled:cursor-not-allowed disabled:opacity-40"
            >

              {currentQuestion ===
              discoveryQuestions.length - 1
                ? 'See My Results'
                : 'Continue'}

              <ArrowRight size={17} />

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}



function DiscoveryResults({
  recommendations,
  onRestart
}) {

  return (
    <div className="min-h-[80vh] bg-[#F8FAF5]">

      <div className="mx-auto max-w-7xl px-6 py-16">


        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
            Your Results
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Career paths worth exploring
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            Based on your answers, these career paths
            may match your interests and preferred way
            of working.
          </p>

        </div>


        {/* Recommendations */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {recommendations.map(
            (career, index) => (

              <div
                key={career.id}
                className="relative"
              >

                {index === 0 && (

                  <span className="absolute -top-3 left-5 z-10 rounded-full bg-[#F07B5A] px-3 py-1 text-xs font-semibold text-white">
                    Strong Match
                  </span>

                )}


                <CareerCard
                  title={career.title}
                  description={career.description}
                  category={career.category}
                  duration={career.duration}
                  slug={career.slug}
                />

              </div>

            )
          )}

        </div>


        {/* Restart */}
        <div className="mt-10 text-center">

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-600 hover:border-[#6B9A38]"
          >

            <RotateCcw size={17} />

            Retake Questions

          </button>

        </div>

      </div>

    </div>
  )
}


export default Discover