import React, { useState } from 'react';
import {
  X,
  Upload,
  Plus,
  Trash2,
  GripVertical,
  Video,
  FileText,
  Link as LinkIcon
} from 'lucide-react';

interface CourseCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (courseData: any) => void;
}

const CourseCreationModal: React.FC<CourseCreationModalProps> = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    duration: '',
    level: 'beginner',
    language: 'en',
    thumbnailUrl: '',
    previewVideoUrl: '',
    requirements: [''],
    whatYouLearn: [''],
    lessons: [{ title: '', type: 'video', content: '', duration: '' }]
  });

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: any) => {
    setCourseData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: string, i: number) =>
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: string) => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev] as string[], '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setCourseData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).filter((_: string, i: number) => i !== index)
    }));
  };

  const handleLessonChange = (index: number, field: string, value: string) => {
    setCourseData(prev => ({
      ...prev,
      lessons: prev.lessons.map((lesson, i) =>
        i === index ? { ...lesson, [field]: value } : lesson
      )
    }));
  };

  const addLesson = () => {
    setCourseData(prev => ({
      ...prev,
      lessons: [...prev.lessons, { title: '', type: 'video', content: '', duration: '' }]
    }));
  };

  const removeLesson = (index: number) => {
    setCourseData(prev => ({
      ...prev,
      lessons: prev.lessons.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    onSave(courseData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create New Course</h2>
            <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title *
                </label>
                <input
                  type="text"
                  value={courseData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Complete Web Development Bootcamp"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={courseData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe what students will learn in your course..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={courseData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                    <option value="photography">Photography</option>
                    <option value="music">Music</option>
                    <option value="health">Health & Fitness</option>
                    <option value="teaching">Teaching</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={courseData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="1999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={courseData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    placeholder="8 hours"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level *
                  </label>
                  <select
                    value={courseData.level}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language *
                  </label>
                  <select
                    value={courseData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="both">English & Hindi</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thumbnail URL
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={courseData.thumbnailUrl}
                      onChange={(e) => handleInputChange('thumbnailUrl', e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Upload className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview Video URL
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={courseData.previewVideoUrl}
                      onChange={(e) => handleInputChange('previewVideoUrl', e.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Video className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Requirements
                  </label>
                  <button
                    onClick={() => addArrayItem('requirements')}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Requirement
                  </button>
                </div>
                <div className="space-y-2">
                  {courseData.requirements.map((req, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                        placeholder="e.g., Basic understanding of HTML"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      {courseData.requirements.length > 1 && (
                        <button
                          onClick={() => removeArrayItem('requirements', index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    What Students Will Learn
                  </label>
                  <button
                    onClick={() => addArrayItem('whatYouLearn')}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Learning Outcome
                  </button>
                </div>
                <div className="space-y-2">
                  {courseData.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange('whatYouLearn', index, e.target.value)}
                        placeholder="e.g., Build modern web applications"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      {courseData.whatYouLearn.length > 1 && (
                        <button
                          onClick={() => removeArrayItem('whatYouLearn', index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Course Curriculum</h3>
                <button
                  onClick={addLesson}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center text-sm"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Lesson
                </button>
              </div>

              <div className="space-y-3">
                {courseData.lessons.map((lesson, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <GripVertical className="h-5 w-5 text-gray-400 mt-3" />
                      <div className="flex-1 space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                            placeholder="Lesson title"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          <select
                            value={lesson.type}
                            onChange={(e) => handleLessonChange(index, 'type', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          >
                            <option value="video">Video</option>
                            <option value="article">Article</option>
                            <option value="quiz">Quiz</option>
                          </select>
                        </div>
                        <div className="grid md:grid-cols-3 gap-3">
                          <input
                            type="text"
                            value={lesson.content}
                            onChange={(e) => handleLessonChange(index, 'content', e.target.value)}
                            placeholder="Content URL"
                            className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            value={lesson.duration}
                            onChange={(e) => handleLessonChange(index, 'duration', e.target.value)}
                            placeholder="Duration"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeLesson(index)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="px-6 py-2 text-gray-700 font-medium hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-2 rounded-full ${s === step ? 'bg-orange-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all"
            >
              Create Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCreationModal;
