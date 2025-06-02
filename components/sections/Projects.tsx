import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  Building,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Project } from "@/lib/data";
import Image from "next/image";
import { SectionHeading } from "../ui/section-heading";
import { motion } from "framer-motion";

const ProjectsShowcase = ({ projects }: { projects: Project[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project data - replace with your actual data

  const categories = [
    { value: "all", label: "Tous les projets", count: projects.length },
    {
      value: "residential",
      label: "Résidentiel",
      count: projects.filter((p) => p.category === "residential").length,
    },
    {
      value: "commercial",
      label: "Commercial",
      count: projects.filter((p) => p.category === "commercial").length,
    },
    {
      value: "infrastructure",
      label: "Infrastructure",
      count: projects.filter((p) => p.category === "infrastructure").length,
    },
  ];

  const years = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.year))),
  ].sort((a, b) => {
    if (a === "all") return 1;
    if (b === "all") return -1;
    return Number(b) - Number(a);
  });

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesYear =
        selectedYear === "all" || String(project.year) === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear, projects]);

  const openImagePreview = (project: Project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeImagePreview = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "planned":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Terminé";
      case "in-progress":
        return "En cours";
      case "planned":
        return "Planifié";
      default:
        return "Statut inconnu";
    }
  };

  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeading
          title="Nos Réalisations"
          subtitle={`Découvrez nos projets d'ingénierie civile à travers le Sénégal. De
            la conception à la réalisation, nous transformons vos idées en
            structures durables.`}
          className="mb-16"
          splitTitle={true}
        />

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label} ({cat.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <Calendar className="text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Toutes les années</option>
                {years
                  .filter((year) => year !== "all")
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={600}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ width: "100%", height: "100%" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusText(project.status)}
                  </span>
                </div>
                <button
                  onClick={() => openImagePreview(project, 0)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                >
                  <Eye className="w-4 h-4 text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{project.year}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Building className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex gap-1">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => openImagePreview(project, index)}
                        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              Aucun projet trouvé pour ces critères de recherche.
            </div>
          </div>
        )}

        {/* Image Preview Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImagePreview}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300">{selectedProject.description}</p>
                <div className="mt-2 text-sm text-gray-400">
                  Image {currentImageIndex + 1} sur{" "}
                  {selectedProject.images.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
