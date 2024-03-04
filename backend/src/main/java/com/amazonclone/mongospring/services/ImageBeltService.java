package com.amazonclone.mongospring.services;

import com.amazonclone.mongospring.model.ImageBelt;
import com.amazonclone.mongospring.repositories.ImageBeltRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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