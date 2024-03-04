package com.amazonclone.data.mongospring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonclone.data.mongospring.model.ImageBelt;
import com.amazonclone.data.mongospring.repositories.ImageBeltRepository;

import java.util.List;

@Service
public class ImageBeltService {

    private final ImageBeltRepository imageBeltRepository;

    @Autowired
    public ImageBeltService(ImageBeltRepository imageBeltRepository) {
        this.imageBeltRepository = imageBeltRepository;
    }

    public List<ImageBelt> getAllImageBelts() {
        return imageBeltRepository.findAll();
    }

    public ImageBelt saveImageBelt(ImageBelt imageBelt) {
        return imageBeltRepository.save(imageBelt);
    }
}