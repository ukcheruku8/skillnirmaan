import React, { useState } from 'react';
import {
  Layout,
  Type,
  Image as ImageIcon,
  Video,
  Square,
  Save,
  Eye,
  Palette,
  Settings,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Link as LinkIcon
} from 'lucide-react';

interface Section {
  id: string;
  type: 'hero' | 'text' | 'image' | 'video' | 'cta' | 'features' | 'testimonials';
  content: any;
}

const LandingPageBuilder = () => {
  const [pageName, setPageName] = useState('My Landing Page');
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      type: 'hero',
      content: {
        title: 'Transform Your Skills',
        subtitle: 'Learn from industry experts',
        buttonText: 'Get Started',
        backgroundImage: ''
      }
    }
  ]);
  const [selectedSection, setSelectedSection] = useState<string | null>('1');
  const [previewMode, setPreviewMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'components' | 'styles' | 'settings'>('components');

  const componentTypes = [
    { type: 'hero', icon: Layout, label: 'Hero Section' },
    { type: 'text', icon: Type, label: 'Text Block' },
    { type: 'image', icon: ImageIcon, label: 'Image' },
    { type: 'video', icon: Video, label: 'Video' },
    { type: 'cta', icon: Square, label: 'Call to Action' },
    { type: 'features', icon: Square, label: 'Features Grid' },
    { type: 'testimonials', icon: Square, label: 'Testimonials' }
  ];

  const addSection = (type: Section['type']) => {
    const newSection: Section = {
      id: Date.now().toString(),
      type,
      content: getDefaultContent(type)
    };
    setSections([...sections, newSection]);
    setSelectedSection(newSection.id);
  };

  const getDefaultContent = (type: Section['type']) => {
    switch (type) {
      case 'hero':
        return { title: 'Hero Title', subtitle: 'Subtitle', buttonText: 'Button', backgroundImage: '' };
      case 'text':
        return { text: 'Enter your text here...', alignment: 'left' };
      case 'image':
        return { url: '', alt: 'Image', caption: '' };
      case 'video':
        return { url: '', thumbnail: '' };
      case 'cta':
        return { title: 'Ready to start?', buttonText: 'Get Started', backgroundColor: '#FF6B35' };
      case 'features':
        return {
          items: [
            { title: 'Feature 1', description: 'Description' },
            { title: 'Feature 2', description: 'Description' },
            { title: 'Feature 3', description: 'Description' }
          ]
        };
      case 'testimonials':
        return {
          items: [
            { name: 'Student Name', text: 'Testimonial text', rating: 5 }
          ]
        };
      default:
        return {};
    }
  };

  const updateSectionContent = (sectionId: string, newContent: any) => {
    setSections(sections.map(section =>
      section.id === sectionId ? { ...section, content: { ...section.content, ...newContent } } : section
    ));
  };

  const deleteSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId));
    if (selectedSection === sectionId) {
      setSelectedSection(sections[0]?.id || null);
    }
  };

  const moveSection = (sectionId: string, direction: 'up' | 'down') => {
    const index = sections.findIndex(s => s.id === sectionId);
    if (
      (direction === 'up' && index > 0) ||
      (direction === 'down' && index < sections.length - 1)
    ) {
      const newSections = [...sections];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
      setSections(newSections);
    }
  };

  const renderSection = (section: Section) => {
    switch (section.type) {
      case 'hero':
        return (
          <div className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-8 text-center rounded-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{section.content.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{section.content.subtitle}</p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold">
              {section.content.buttonText}
            </button>
          </div>
        );
      case 'text':
        return (
          <div className={`py-8 px-8 text-${section.content.alignment || 'left'}`}>
            <p className="text-gray-700">{section.content.text}</p>
          </div>
        );
      case 'image':
        return (
          <div className="py-8">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              {section.content.url ? (
                <img src={section.content.url} alt={section.content.alt} className="max-h-full rounded-lg" />
              ) : (
                <ImageIcon className="h-16 w-16 text-gray-400" />
              )}
            </div>
            {section.content.caption && (
              <p className="text-center text-sm text-gray-600 mt-2">{section.content.caption}</p>
            )}
          </div>
        );
      case 'cta':
        return (
          <div className="py-12 px-8 bg-orange-500 text-center rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">{section.content.title}</h2>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold">
              {section.content.buttonText}
            </button>
          </div>
        );
      default:
        return <div className="py-8 px-8 text-gray-500">Section type: {section.type}</div>;
    }
  };

  const renderEditor = () => {
    const section = sections.find(s => s.id === selectedSection);
    if (!section) return null;

    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 mb-4">Edit {section.type} Section</h3>
        {section.type === 'hero' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={section.content.title}
                onChange={(e) => updateSectionContent(section.id, { title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <input
                type="text"
                value={section.content.subtitle}
                onChange={(e) => updateSectionContent(section.id, { subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
              <input
                type="text"
                value={section.content.buttonText}
                onChange={(e) => updateSectionContent(section.id, { buttonText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </>
        )}
        {section.type === 'text' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Text Content</label>
              <textarea
                value={section.content.text}
                onChange={(e) => updateSectionContent(section.id, { text: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alignment</label>
              <select
                value={section.content.alignment}
                onChange={(e) => updateSectionContent(section.id, { alignment: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </>
        )}
        {section.type === 'image' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                value={section.content.url}
                onChange={(e) => updateSectionContent(section.id, { url: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
              <input
                type="text"
                value={section.content.alt}
                onChange={(e) => updateSectionContent(section.id, { alt: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
              <input
                type="text"
                value={section.content.caption}
                onChange={(e) => updateSectionContent(section.id, { caption: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </>
        )}
        {section.type === 'cta' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={section.content.title}
                onChange={(e) => updateSectionContent(section.id, { title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
              <input
                type="text"
                value={section.content.buttonText}
                onChange={(e) => updateSectionContent(section.id, { buttonText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Layout className="h-6 w-6 text-orange-600" />
              <input
                type="text"
                value={pageName}
                onChange={(e) => setPageName(e.target.value)}
                className="text-lg font-semibold text-gray-900 border-0 focus:ring-0 px-2 py-1 hover:bg-gray-50 rounded"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Eye className="h-5 w-5" />
                <span>{previewMode ? 'Edit' : 'Preview'}</span>
              </button>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                <Save className="h-5 w-5" />
                <span>Save & Publish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {!previewMode && (
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex space-x-2 mb-4 border-b border-gray-200">
                  {(['components', 'styles', 'settings'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 px-3 text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? 'text-orange-600 border-b-2 border-orange-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {activeTab === 'components' && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Add Component</h3>
                    {componentTypes.map((component) => (
                      <button
                        key={component.type}
                        onClick={() => addSection(component.type as Section['type'])}
                        className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all"
                      >
                        <component.icon className="h-5 w-5 text-gray-600" />
                        <span className="text-sm text-gray-700">{component.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {activeTab === 'styles' && renderEditor()}

                {activeTab === 'settings' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Page Settings</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Page Slug</label>
                      <div className="flex items-center space-x-2">
                        <LinkIcon className="h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="my-landing-page"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
                      <input
                        type="text"
                        placeholder="Page title for search engines"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                      <textarea
                        placeholder="Page description"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {activeTab === 'components' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Sections</h3>
                  <div className="space-y-2">
                    {sections.map((section, index) => (
                      <div
                        key={section.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedSection === section.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedSection(section.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {section.type}
                          </span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                moveSection(section.id, 'up');
                              }}
                              disabled={index === 0}
                              className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                            >
                              <MoveUp className="h-4 w-4 text-gray-600" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                moveSection(section.id, 'down');
                              }}
                              disabled={index === sections.length - 1}
                              className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                            >
                              <MoveDown className="h-4 w-4 text-gray-600" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteSection(section.id);
                              }}
                              className="p-1 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className={previewMode ? 'lg:col-span-4' : 'lg:col-span-3'}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[600px]">
              <div className="space-y-6">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={`${
                      !previewMode && selectedSection === section.id ? 'ring-2 ring-orange-500 rounded-lg' : ''
                    }`}
                  >
                    {renderSection(section)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBuilder;
